import AdminNav from "./components/AdminNav";
import "../../styles/admin.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="bg-blue-900 min-h-screen flex">
      <AdminNav />
      <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
