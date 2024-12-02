import AchievementsPage from "./components/AchievementSection/Achivements";
import CompanyPage from "./components/CompanySection/Companies";
import CourseSectionPage from "./components/CourseSection/Course";
import ExploreCoursePage from "./components/ExploreSection/ExploreSection";
import FooterPage from "./components/FooterSection/Footer";
import HeaderPage from "./components/HeaderSection/Header";
import HeroPage from "./components/HeroSection/Hero";
import NavbarPage from "./components/Navbar";
import TeamPage from "./components/TeamSection/Team";
import TestimonialsPage from "./components/TestimonialSection/Testimonials";
export default function Home() {
  return (
    <div>
      <NavbarPage />
      <HeaderPage />
      <HeroPage />
      <CompanyPage />
      <ExploreCoursePage />
      <AchievementsPage />
      <CourseSectionPage />
      <TeamPage />
      <TestimonialsPage />
      <FooterPage />
    </div>
  );
}