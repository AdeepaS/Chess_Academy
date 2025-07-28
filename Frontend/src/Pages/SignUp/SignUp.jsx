import SignupCard from '../../components/SignUpCard/SignUpCard'
import './SignUp.css'

export default function SignupPage() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="header-section">
          <h1 className="academy-title">Nobel Worriors Chess Academy</h1>
          <p className="academy-subtitle">Join our community of chess enthusiasts</p>
        </div>
        <SignupCard />
      </div>
      <div className="chess-pattern"></div>
    </div>
  )
}
