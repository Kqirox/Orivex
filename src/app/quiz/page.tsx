import { QuizContainer } from "@/components/quiz/quiz-container";

export const metadata = {
  title: "Quiz — Orivex",
  description: "Test your knowledge with Orivex quizzes",
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-background">
      <QuizContainer />
    </main>
  );
}
