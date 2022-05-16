import { Table, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeList from "./EmployeeData";

function Employee() {
  let navigate = useNavigate();
  let param = useParams();

  let result = [];
  if (param.department) {
    result = EmployeeList.filter((x) => x.department === param.department);
  } else {
    result = EmployeeList;
  }

  const employeeDetailFunc = (e, i) => {
    e.preventDefault();
    navigate("/employee-detail", {
      replace: true,
      state: EmployeeList[i],
    });
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Employee Detail",
      dataIndex: "employeeDetail",
      key: "employeeDetail",
      render: (t, r) => (
        <Button danger
          onClick={(e) => employeeDetailFunc(e, EmployeeList.indexOf(r))}
        >
          Employee Detail
        </Button>
      ),
    },
  ];

  return (
    <div style={{ margin: "50px" }}>
      <h1>Employee List</h1>
      <Table dataSource={result} columns={columns} pagination={false} />
      <br />
    
    </div>
  );
}

export default Employee;