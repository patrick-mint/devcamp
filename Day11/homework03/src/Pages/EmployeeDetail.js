import { useLocation } from "react-router-dom";

function EmployeeDetail() {
  const location = useLocation();
  let employeeDetail = location.state;

  return (
    <div style={{ margin: "50px" }}>
      <h1>Employee Detail</h1>

      <p>ID: {employeeDetail.id}</p>
      <p>First Name: {employeeDetail.firstname}</p>
      <p>Last Name: {employeeDetail.lastname}</p>
      <p>Age: {employeeDetail.age}</p>
      <p>Department: {employeeDetail.department}</p>
      <p>salary: {employeeDetail.salary}</p>
    </div>
  );
}

export default EmployeeDetail;