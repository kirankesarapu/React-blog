/* eslint-disable react-hooks/exhaustive-deps */
import kiran from "../assets/kiran_k.jpeg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import axios from "axios";
import { Button, Flex, Form, Input, Upload, message } from "antd";
import { getUserLocal } from "../utils";

const BlogContent = () => {
  const { id } = useParams();
  const isAddPage = !id;
  const isAdmin = getUserLocal()?.custom_role === "admin";

  const [state, setState] = useState({});
  const [editMode, setEditMode] = useState(isAddPage ?? false);
  const [content, setContent] = useState(state?.attributes?.content ?? "");
  const [title, setTitle] = useState(state?.attributes?.title ?? "");

  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (isAddPage) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/blogs/${id}?populate=*`);
        setState(res.data.data);
        setContent(res.data.data?.attributes?.content);
        setTitle(res.data.data?.attributes?.title);
      } catch (error) {
        alert("Something went wrong!");
      }
    };

    fetchData();
  }, []);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onFinish = async (values) => {
    if (!imageFile) {
      message.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("files", imageFile);

    try {
      const uploadResponse = await axios.post(
        `${API_URL}/api/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const imageUrl = uploadResponse.data[0].url;
      const blogData = {
        data: {
          title: title,
          content: content,
          coverImage: imageUrl,
        },
      };

      const createBlogResponse = await axios.post(
        `${API_URL}/api/blogs`,
        blogData
      );

      if (createBlogResponse.status === 200) {
        message.success("Blog created successfully!");
      } else {
        message.error("Failed to create blog.");
      }
      window.location.href = "/admin";
    } catch (error) {
      message.error("Error uploading image or creating blog.");
      console.error("Error:", error);
    }
  };

  const handleUpdateContent = async () => {
    try {
      await axios.put(`${API_URL}/api/blogs/${id}`, {
        data: {
          content: content,
          title: title,
        },
      });
      setEditMode(false);
      message.success("Content updated.");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div className="blog-wrapper">
        <div className="content">
          <Flex style={{ width: "100%" }} justify="flex-end">
            {!isAddPage && isAdmin && (
              <Button
                onClick={() => setEditMode(!editMode)}
                style={{ marginBottom: 20 }}
                danger
                type="primary"
              >
                {editMode ? "Close" : "Edit"}
              </Button>
            )}
          </Flex>

          {editMode && isAddPage ? (
            <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 14 }}>
              <Form.Item
                label="Image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload
                  name="files"
                  listType="picture"
                  maxCount={1}
                  beforeUpload={(file) => {
                    setImageFile(file);
                    return false;
                  }}
                >
                  <Button>Click to upload</Button>
                </Upload>
              </Form.Item>
            </Form>
          ) : (
            <img
              src={`${API_URL}${state?.attributes?.coverImage}`}
              alt="blog"
              style={{
                marginBottom: 50,
              }}
            />
          )}

          {editMode ? (
            <Input
              style={{ marginBottom: 30 }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            <h1 className="BlogTitle">{title}</h1>
          )}
          {!editMode ? (
            <p
              style={{ width: "100%" }}
              dangerouslySetInnerHTML={{
                __html: content?.replaceAll("\n", "<br/>"),
              }}
            />
          ) : (
            <>
              <Input.TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={15}
              />
              <Button
                onClick={isAddPage ? onFinish : handleUpdateContent}
                style={{ marginTop: 50 }}
                type="primary"
              >
                Save the changes
              </Button>
            </>
          )}
        </div>
        <div className="Author_data">
          <img src={kiran} alt="Author" className="AuthorImage" />
          <div className="AuthorDescription">
            <p>
              <strong>Kiran Kesarapu</strong>
            </p>
            <p>Welcome everyone i'm super excited to showcase my blog.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
