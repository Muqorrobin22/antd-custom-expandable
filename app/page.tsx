"use client";

import { Skeleton, Table, TableColumnsType } from "antd";
import { JSX, useCallback, useEffect, useState } from "react";

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

interface DataTypeNew {
  key: string;
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

const datanew: DataTypeNew[] = [
  {
    key: "1",
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
    key: "2",
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
    key: "3",
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
  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([]);
  const [isTriggerFetchDataFromAPI, setIsTriggerFetchDataFromAPI] =
    useState<boolean>(false);
  const [keyEachRow, setKeyEachRow] = useState<string>("");

  const handleExpand: ({
    expanded,
    record,
  }: {
    record: DataTypeNew;
    expanded?: boolean;
  }) => void = ({ record }) => {
    setKeyEachRow(record.key);

    if (expandedRowKeys.includes(record.key)) {
      setIsTriggerFetchDataFromAPI(false);
    } else {
      setIsTriggerFetchDataFromAPI(true);
    }

    setExpandedRowKeys((prev) => {
      return prev.includes(record.key)
        ? prev.filter((key) => key !== record.key)
        : [...prev, record.key];
    });
  };

  const [loadingEachRows, setLoadingEachRows] = useState<{
    [key: string]: boolean;
  }>({});

  const FetchAPI = useCallback(() => {
    setLoadingEachRows((prev) => ({
      ...prev,
      [keyEachRow]: true,
    }));

    setTimeout(() => {
      setLoadingEachRows((prev) => ({
        ...prev,
        [keyEachRow]: false,
      }));
    }, 3000);
  }, [keyEachRow]);

  useEffect(() => {
    if (isTriggerFetchDataFromAPI) {
      FetchAPI();
      setIsTriggerFetchDataFromAPI(false);
    }
  }, [isTriggerFetchDataFromAPI, FetchAPI]);

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

  const expandableUIRowNew: (record: DataTypeNew) => JSX.Element = (record) => {
    const isLoading = loadingEachRows[record.key] || false;

    return (
      <section className="grid gap-8 p-2 grid-cols-2 max-w-[1000px]">
        <div>
          <div>
            <span className="font-bold">Name: </span>{" "}
            {isLoading ? (
              <Skeleton.Button
                active
                style={{ maxHeight: 20, minWidth: 100 }}
              />
            ) : (
              record.name
            )}
          </div>

          <div>
            <span className="font-bold">Age: </span>{" "}
            {isLoading ? (
              <Skeleton.Button
                active
                style={{ maxHeight: 20, minWidth: 100 }}
              />
            ) : (
              record.age
            )}
          </div>
          <div>
            <span className="font-bold">Address: </span>{" "}
            {isLoading ? (
              <Skeleton.Button
                active
                style={{ maxHeight: 20, minWidth: 200 }}
              />
            ) : (
              record.address
            )}
          </div>
          <div>
            <span className="font-bold">Description: </span>{" "}
            {isLoading ? (
              <Skeleton.Button
                active
                style={{ maxHeight: 20, minWidth: 250 }}
              />
            ) : (
              record.description
            )}
          </div>
        </div>

        <div>
          <div>
            <span className="font-bold">Occupation: </span>{" "}
            {isLoading ? (
              <Skeleton.Button
                active
                style={{ maxHeight: 20, minWidth: 100 }}
              />
            ) : (
              record.occupation
            )}
          </div>
          <div>
            <span className="font-bold">Phone: </span>{" "}
            {isLoading ? (
              <Skeleton.Button
                active
                style={{ maxHeight: 20, minWidth: 100 }}
              />
            ) : (
              record.phone_number
            )}
          </div>
          <div>
            <span className="font-bold">Status: </span>{" "}
            {isLoading ? (
              <Skeleton.Button
                active
                style={{ maxHeight: 20, minWidth: 100 }}
              />
            ) : (
              record.status
            )}
          </div>
        </div>
      </section>
    );
  };

  const columnsNewTable: TableColumnsType<DataTypeNew> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Descritpion", dataIndex: "description", key: "description" },
    {
      title: "Action",
      key: "action",
      render(value, record) {
        return (
          <div
            className="flex items-center cursor-pointer "
            onClick={() => handleExpand({ record })}
          >
            <p> Details </p>
          </div>
        );
      },
    },
  ];

  return (
    <div className="flex items-center justify-center h-[100vh]">
      {/* Code here */}
      <div>
        <div className="my-4">
          <h1 className="text-base font-normal">Part I</h1>
          <p className="text-sm font-light">
            *let Antd Components handle functionality
          </p>
        </div>
        <Table<DataType>
          columns={columns}
          dataSource={data}
          pagination={false}
          expandable={{
            expandedRowRender: (record) => {
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
        <div className="mt-6">
          <div className="my-4">
            <h1 className="text-base font-normal">Part II</h1>
            <p className="text-sm font-light">
              *Control Over your expandable functionality
            </p>
          </div>
          <Table<DataTypeNew>
            columns={columnsNewTable}
            dataSource={datanew}
            pagination={false}
            expandable={{
              expandedRowRender: (record) => {
                return <div>{expandableUIRowNew(record)}</div>;
              },
              expandedRowKeys: expandedRowKeys,
              showExpandColumn: false,
              onExpand: (expanded, record) => {
                // code the logic in here
                handleExpand({ expanded, record });
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
