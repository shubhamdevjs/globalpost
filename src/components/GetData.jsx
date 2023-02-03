import React, { useEffect, useState } from "react";
import "./getdata.css";
import axios from "axios";

const GetData = () => {
  const [listdata, setListdata] = useState([]);
  const [number, setNumber] = useState("");
  const [userdata, setUserdata] = useState([]);
  const [commentid, setCommentid] = useState("");
  const [commentList, setCommentList] = useState([]);

  const getList = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setListdata(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  //   console.log(listdata);
  //   console.log(number)
  const getUserdata = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${number}`
      );
      setUserdata(res.data);
      //   setNumber('')
    } catch (error) {
      console.log(error.message);
    }
  };

  const getComments = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${commentid}/comments`
      );
      setCommentList(res.data);
      //   setNumber('')
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div className="container">
        <div className="containerlist">
          {listdata.map((obj) => {
            return (
              <>
                <div className="listcotents">
                  <div className="userid">
                    <p
                      style={{
                        backgroundColor: "gray",
                        borderRadius: "1rem",
                        padding: "5px 10px",
                        marginRight: "1rem",
                      }}
                    >
                      User Id: {obj.userId}
                    </p>
                    <p
                      style={{
                        backgroundColor: "gray",
                        borderRadius: "1rem",
                        padding: "5px 10px",
                        marginRight: "1rem",
                      }}
                    >
                      Post Id:{obj.id}
                    </p>
                  </div>
                  <h4 style={{ textAlign: "center" }}>{obj.title}</h4>
                  {obj.body}
                </div>
              </>
            );
          })}
        </div>
        <div className="containeruserdetials">
          <input
            // className=""
            placeholder="enter the user id"
            // type="number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          />
          <button
            onClick={() => {
              getUserdata();
            }}
          >
            Get Details
          </button>
          <div className="userdetails">
            <div>
              <span style={{ fontWeight: "500", marginRight: "5rem" }}>
                user id:
              </span>{" "}
              {userdata.id}
            </div>
            <div>
              <span style={{ fontWeight: "500", marginRight: "5rem" }}>
                name:
              </span>{" "}
              {userdata.name}
            </div>
            <div>
              <span style={{ fontWeight: "500", marginRight: "5rem" }}>
                username:
              </span>{" "}
              {userdata.username}
            </div>
            <div>
              <span style={{ fontWeight: "500", marginRight: "5rem" }}>
                email:
              </span>{" "}
              {userdata.email}
            </div>
            <div>
              <span style={{ fontWeight: "500", marginRight: "5rem" }}>
                Phone Number:
              </span>{" "}
              {userdata.phone}
            </div>
            <div>
              <span style={{ fontWeight: "500", marginRight: "5rem" }}>
                Website
              </span>{" "}
              {userdata.website}
            </div>
            {/* {userdata.address.city} */}
            {/* {userdata.cpmpany.name} */}
          </div>
        </div>
        <div className="containercomments">
          <input
            // className=""
            placeholder="enter the Post id"
            // type="number"
            value={commentid}
            onChange={(event) => setCommentid(event.target.value)}
          />
          <button
            onClick={() => {
              getComments();
            }}
          >
            Get Comments
          </button>
          <div className="containercommentscontent">
            {commentList.map((obj) => {
              return (
                <>
                  <div className="indicomment">
                    <p>Post Id: {obj.postId}</p>
                    <p>User Id: {obj.id}</p>
                    <p>Name: {obj.name}</p>
                    <p>Email: {obj.email}</p>
                    <p>Comment: {obj.body}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetData;
