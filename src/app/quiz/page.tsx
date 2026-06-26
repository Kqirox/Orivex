import { QuizContainer } from "@/components/quiz/quiz-container";

export const metadata = {
  title: "Quiz — Learnault",
  description: "Test your knowledge with Learnault quizzes",
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-background">
      <QuizContainer />
    </main>
  );
}
