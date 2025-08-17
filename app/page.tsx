"use client";

import { Table, TableColumnsType } from "antd";
import { JSX } from "react";

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
  const expandableUIRow: (record: DataType) => JSX.Element = (record) => {
    return (
      <section className="grid gap-8 p-2 grid-cols-2 max-w-[1000px]">
        <div>
          <p>
            <span className="font-bold">Name: </span> {record.name}
          </p>
          <p>
            <span className="font-bold">Age: </span> {record.age}
          </p>
          <p>
            <span className="font-bold">Address: </span> {record.address}
          </p>
          <p>
            <span className="font-bold">Description: </span>{" "}
            {record.description}
          </p>
        </div>

        <div>
          <p>
            <span className="font-bold">Occupation: </span> {record.occupation}
          </p>
          <p>
            <span className="font-bold">Phone: </span> {record.phone_number}
          </p>
          <p>
            <span className="font-bold">Status: </span> {record.status}
          </p>
        </div>
      </section>
    );
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      {/* Code here */}
      <div>
        <Table<DataType>
          columns={columns}
          dataSource={data}
          pagination={false}
          expandable={{
            expandedRowRender: (record) => {
              console.log("record: ", record);
              return <div>{expandableUIRow(record)}</div>;
            },
            expandIcon: ({ expanded, onExpand, record }) => {
              return expanded ? (
                <p onClick={(e) => onExpand(record, e)}>Hide</p>
              ) : (
                <p onClick={(e) => onExpand(record, e)}>Details</p>
              );
            },
          }}
        />

        {/* Code here PART II */}
        <div className="mt-6"></div>
      </div>
    </div>
  );
}
