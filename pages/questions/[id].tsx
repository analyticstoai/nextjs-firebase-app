import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as firebase from "firebase/app";
import Layout from "../../componts/Layout";
import { Question } from "../../models/Question";
import { useAuthentication } from "../../hooks/authentication";
import { Answer } from "../../models/Answer";

type Query = {
  id: string;
};

export default function QuestionsShow() {
  const router = useRouter();
  const query = router.query as Query;
  const { user } = useAuthentication();
  const [question, setQuestion] = useState<Question>(null);
  const [body, setBody] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [answer, setAnswer] = useState<Answer>(null);

  async function loadData() {
    if (query.id === undefined) {
      return;
    }

    const questionDoc = await firebase.default
      .firestore()
      .collection("questions")
      .doc(query.id)
      .get();
    if (!questionDoc.exists) {
      return;
    }

    const gotQuestion = questionDoc.data() as Question;
    gotQuestion.id = questionDoc.id;
    setQuestion(gotQuestion);
    if (!gotQuestion.isReplied) {
      return;
    }

    const answerSnapshot = await firebase.default
      .firestore()
      .collection("answers")
      .where("questionId", "==", gotQuestion.id)
      .limit(1)
      .get();
    if (answerSnapshot.empty) {
      return;
    }

    const gotAnswer = answerSnapshot.docs[0].data() as Answer;
    gotAnswer.id = answerSnapshot.docs[0].id;
    setAnswer(gotAnswer);
  }

  useEffect(() => {
    loadData();
  }, [query.id]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);

    await firebase.default.firestore().runTransaction(async (t) => {
      t.set(firebase.default.firestore().collection("answers").doc(), {
        uid: user.uid,
        questionId: question.id,
        body,
        createdAt: firebase.default.firestore.FieldValue.serverTimestamp(),
      });
      t.update(
        firebase.default.firestore().collection("questions").doc(question.id),
        {
          isReplied: true,
        }
      );
    });
    const now = new Date().getTime();
    setAnswer({
        id: '',
        uid: user.uid,
        questionId: question.id,
        body,
        createdAt: new firebase.default.firestore.Timestamp(now / 1000, now % 1000),
      })
  }

  return (
    <div className="">
      <Layout>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            {question && (
              <div className="card">
                <div className="card-body">{question.body}</div>
              </div>
            )}
          </div>
        </div>
      </Layout>
      <div className="col-12 col-md-6 text-center">
        {question && (
          <>
            <div className="card">
              <div className="card-body">{question.body}</div>
            </div>

            <section className="text-center mt-4">
              <h2 className="h4">回答</h2>

              {answer === null ? (
                <form onSubmit={onSubmit}>
                  <textarea
                    className="form-control"
                    placeholder="おげんきですか？"
                    rows={6}
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                  ></textarea>
                  <div className="m-3">
                    {isSending ? (
                      <div
                        className="spinner-border text-secondary"
                        role="status"
                      ></div>
                    ) : (
                      <button type="submit" className="btn btn-primary">
                        回答する
                      </button>
                    )}
                  </div>
                </form>
              ) : (
                <div className="card">
                  <div className="card-body text-left">{answer.body}</div>
                </div>
              )}
            </section>
          </>
        )}
      </div>
    </div>
  );
}
