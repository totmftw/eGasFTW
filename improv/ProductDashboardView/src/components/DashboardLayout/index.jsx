import RenderContentSections from "../RenderContentSections";
import SvgIcon1 from "./icons/SvgIcon1";
import SvgIcon2 from "./icons/SvgIcon2";
import SvgIcon3 from "./icons/SvgIcon3";
import SvgIcon4 from "./icons/SvgIcon4";
import SvgIcon5 from "./icons/SvgIcon5";
import SvgIcon6 from "./icons/SvgIcon6";
import SvgIcon7 from "./icons/SvgIcon7";
import SvgIcon8 from "./icons/SvgIcon8";
import SvgIcon9 from "./icons/SvgIcon9";
import SvgIcon10 from "./icons/SvgIcon10";
import "./style.css";

function DashboardLayout({ contentSectionsData }) {
  return (
    <div className="dark-panel-container">
      <div className="dashboard-header-container">
        <SvgIcon1 className="svg-container" />
        <p className="dashboard-title">Dashboard</p>
      </div>
      <RenderContentSections contentSectionsData={contentSectionsData} />
      <div className="cost-display-container">
        <p className="currency-symbol-text-style">₹</p>
        {/* Checkbox with Label Component is detected here. We've generated code using HTML because MUI Base doesn't have an applicable comment */}
        <div className="product-info-container">
          <div className="product-thumbnail-container">
            <input id="sku costing" type="checkbox" defaultChecked={false} className="hidden-input" />
            <img className="hidden-icon img-content-4ed0fa3c" />
          </div>
          <label htmlFor="sku costing" className="product-title-text-style">
            SKU Costing
          </label>
        </div>
      </div>
      <div className="inventory-section-container">
        <div className="inventory-section">
          <SvgIcon2 className="svg-container3" />
          <p className="inventory-title-style">Inventory</p>
        </div>
        <div className="inventory-section1">
          <SvgIcon3 className="svg-container4" />
        </div>
      </div>
      <div className="payment-reports-section">
        <div className="flex-row-with-icon">
          <SvgIcon4 className="svg-container5" />
          <p className="report-title-style">Payment Reports</p>
        </div>
        <SvgIcon5 className="svg-container2" />
      </div>
      <div className="central-content-block">
        <div className="report-container">
          <SvgIcon6 className="svg-container5" />
          <p className="report-title-style">Business Reports</p>
        </div>
        <SvgIcon7 className="svg-container6" />
      </div>
      <div className="review-section-title-container">
        <SvgIcon8 className="svg-container7" />
        <p className="review-title-text-style">Reviews</p>
      </div>
      <div className="vertical-menu-container">
        <div className="flex-row-with-icon">
          <SvgIcon9 className="svg-container8" />
          <p className="settings-title">Settings</p>
        </div>
        <div className="user-actions-container">
          <SvgIcon10 className="svg-container8" />
          <p className="logout-button-text-style">Logout</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
