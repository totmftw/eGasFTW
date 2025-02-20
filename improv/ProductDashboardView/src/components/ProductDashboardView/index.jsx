import DashboardLayout from "../DashboardLayout";
import "./style.css";

function ProductDashboardView({ contentSectionsData }) {
  return (
    <div className="dashboard-layout-container1">
      <div className="dashboard-layout-container">
        <img src="/assets/image_59696782.png" className="image-container" />
      </div>
      <DashboardLayout contentSectionsData={contentSectionsData} />
    </div>
  );
}

export default ProductDashboardView;
