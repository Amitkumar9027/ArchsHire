import { useLocation, useParams } from "react-router-dom";

const ArchitectDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const architect = location.state?.architect;

  if (!architect) return <div>Architect not found.</div>;

  return (
    <div className="architect-detail-page">
      <h1>{architect.name}</h1>
      <p><strong>Role:</strong> {architect.role}</p>
      <p><strong>Experience:</strong> {architect.experience} years</p>
      <p><strong>Projects:</strong> {architect.projects}</p>
      <img src={architect.image} alt={architect.name} style={{ width: "200px", borderRadius: "50%" }} />
    </div>
  );
};

export default ArchitectDetails;
