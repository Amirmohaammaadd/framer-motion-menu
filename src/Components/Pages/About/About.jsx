import { Table } from "antd";
const About = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    Table.EXPAND_COLUMN,
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    // Table.SELECTION_COLUMN,
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];
  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "Jiangsu No. 1 Lake Park",
      description: "This not expandable",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
    },
  ];
  return (
    <div className="w-full p-4 m-2">
      <Table
        columns={columns}
        // rowSelection={{}}
        expandable={{
          expandedRowRender: (record) => (
            <div className="flex gap-2">
              {/* ---- button Role ---- */}

              <button
                id="btn-explanation"
                className="px-2 py-2 rounded-md bg-[#FFBB0B] text-white shadow-md hover:bg-[#daaf45] hover:scale-105"
              >
                توضیحات
              </button>

              {/* --------------------- */}
              {/* ---- button Role ---- */}

              <button
                id="btn-detail"
                className="px-2 py-2 rounded-md bg-[#344DFF] text-white shadow-md hover:bg-[#5266ff] hover:scale-105"
              >
                جزئیات
              </button>

              {/* --------------------- */}
              {/* ---- button Role ---- */}

              <button
                id="btn-progressCase"
                className="px-2 py-2 rounded-md bg-[#3ed339] text-white shadow-md hover:bg-[#31c224] hover:scale-105"
              >
                روند پرونده
              </button>

              {/* --------------------- */}
              {/* ---- button Role ---- */}

              <button
                id="btn-acceptance"
                className="px-2 py-2 rounded-md bg-[#DC3545] text-white hover:bg-[#ad1b29] hover:scale-105"
              >
                پذیرش درخواست
              </button>

              {/* --------------------- */}
            </div>
          ),
        }}
        dataSource={data}
      />
    </div>
  );
};

export default About;
