import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
import EmployeeList from "./EmployeeData";

function Department() {
  const key = "department";

  const department = [
    ...new Map(EmployeeList.map((item) => [item[key], item])).values(),
  ];

  console.log(department);

  let departmentData = [];
  // eslint-disable-next-line
  EmployeeList.map((x) => {
    !departmentData.find((y) => y === x.department) &&
      departmentData.push(x.department);
  });

  let navigate = useNavigate();
// eslint-disable-next-line
  const employeeListFunc = (e, department) => {
    e.preventDefault();
    navigate(`/employee/${department}`);
  };

  const employeeListFunc2 = (e, department) => {
    e.preventDefault();
    navigate(`/employee/${department.department}`);
  };

  const columns = [
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "",
      dataIndex: "departmentDetail",
      key: "departmentDetail",
      render: (t, r) => (
        <Button danger onClick={(e) => employeeListFunc2(e, r)}>
           More Detail
        </Button>
      ),
    },
  ];

  return (
    <div style={{ margin: "50px"}}>
       <h1>Department Detail</h1>
      <Table dataSource={department} columns={columns} pagination={false} />
      <br />
    
    </div>
  );
}

export default Department;