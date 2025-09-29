import React, { use } from "react";
import { dummyConnectionsData } from "../assets/assets";
import { Eye, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative bg-slate-50">
      <div className="max-w-6xl max-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Messages</h1>
          {/* chats */}
          <div className="flex flex-col gap-3">
            {dummyConnectionsData.map((user) => (
              <div
                key={user._id}
                className="w-full max-w-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white shadow rounded-md"
              >
                {/* Avatar + Info */}
                <div className="flex items-start sm:items-center gap-4 flex-1">
                  <img
                    src={user.profile_picture}
                    alt=""
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-medium text-slate-700">
                      {user.full_name}
                    </p>
                    <p className="text-slate-500 text-sm">@{user.username}</p>
                    <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 hidden sm:block">
                      {user.bio}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <button
                    onClick={() => navigate(`/messages/${user._id}`)}
                    className="w-10 h-10 flex items-center justify-center rounded bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-95 transition"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigate(`/profile/${user._id}`)}
                    className="w-10 h-10 flex items-center justify-center rounded bg-slate-100 hover:bg-slate-200 text-slate-800 active:scale-95 transition"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
