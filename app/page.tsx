"use client";

import { Table, TableColumnsType } from "antd";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
  phone_number: string;
  occupation: string;
  status: "single" | "married";
}

const data: DataType[] = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park. ",
    occupation: "Software Engineer",
    phone_number: "8888888888",
    status: "married",
  },
  {
    key: 2,
    name: "John Smith",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Smith, I am 27 years old, living in New York No. 1 Lake Park. ",
    occupation: "Network Engineer",
    phone_number: "99999999",
    status: "single",
  },
  {
    key: 3,
    name: "Ahmed Alakhtar",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is Ahmed Alakhtar, I am 29 years old, living in New York No. 1 Lake Park. ",
    occupation: "AI engineer",
    phone_number: "111111111",
    status: "single",
  },
];

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  { title: "Age", dataIndex: "age", key: "age" },
  { title: "Address", dataIndex: "address", key: "address" },
  { title: "Descritpion", dataIndex: "description", key: "description" },
  Table.EXPAND_COLUMN,
];

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      {/* Code here */}
      <Table<DataType>
        columns={columns}
        dataSource={data}
        pagination={false}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          expandIcon: ({ expanded, onExpand, record }) => {
            return expanded ? (
              <p onClick={(e) => onExpand(record, e)}>Hide</p>
            ) : (
              <p onClick={(e) => onExpand(record, e)}>Details</p>
            );
          },
        }}
      />
    </div>
  );
}
