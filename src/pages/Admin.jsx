import { Button, Flex, Space, Table, message } from "antd";
import useFetch from "../hooks/useFetch";
import { API_URL } from "../config";
import axios from "axios";

const Admin = () => {
  const { data, loading, triggerFetch } = useFetch(
    `${API_URL}/api/blogs?populate=*`
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/blogs/${id}`);
      message.error("Deleted blog");
      triggerFetch();
    } catch (error) {
      alert("Something went wrong.");
    }
  };

  return (
    <div
      style={{
        padding: 100,
      }}
    >
      <Flex justify="space-between" align="center">
        <h2>Blogs</h2>
        <Button href="/blog/add" type="primary">
          Add Blog
        </Button>
      </Flex>
      <Table
        loading={loading}
        dataSource={data?.data}
        columns={[
          {
            title: "Id",
            dataIndex: "id",
          },
          {
            title: "Title",
            dataIndex: ["attributes", "title"],
          },
          {
            title: "Actions",
            render: (_, row) => {
              return (
                <Space>
                  <Button href={`/blog/${row.id}`}>Edit</Button>
                  <Button onClick={() => handleDelete(row.id)} danger>
                    Delete
                  </Button>
                </Space>
              );
            },
          },
        ]}
      />
    </div>
  );
};

export default Admin;
