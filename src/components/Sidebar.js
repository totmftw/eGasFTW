import React, { useState } from 'react'
import Link from 'next/link'
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaList,
  FaMoneyBill,
  FaWarehouse,
  FaChartLine,
  FaBook,
  FaClipboardList,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa'
import { BsGrid } from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import RenderContentSections from "./RenderContentSections";
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
import './Sidebar.css';

export default function Sidebar({ contentSectionsData }) {
  const [reportsOpen, setReportsOpen] = useState(false)

  const toggleReports = () => {
    setReportsOpen(!reportsOpen)
  }

  return (
    <div className="dark-panel-container">
      <div className="sidebar-header-container">
        <SvgIcon1 className="svg-container" />
        <p className="sidebar-title">Sidebar</p>
      </div>
      <RenderContentSections contentSectionsData={contentSectionsData} />
      <div className="cost-display-container">
        <p className="currency-symbol-text-style">₹</p>
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
      <aside className="bg-gray-900 text-gray-100 w-64 h-screen flex flex-col">
        {/* Top section with brand logo */}
        <div className="flex items-center justify-center h-20 border-b border-gray-800">
          {/* Example brand logo or text */}
          <div className="flex items-center space-x-2">
            <BsGrid className="text-blue-400 text-3xl" />
            <span className="text-xl font-bold">MyBrand</span>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="px-2 space-y-1">
            {/* Dashboard */}
            <li>
              <Link href="/">
                <span className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors">
                  <FaTachometerAlt className="mr-3" />
                  <span>Dashboard</span>
                </span>
              </Link>
            </li>

            {/* Product Catalog */}
            <li>
              <Link href="/product-catalog">
                <span className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors">
                  <FaBoxOpen className="mr-3" />
                  <span>Product Catalog</span>
                </span>
              </Link>
            </li>

            {/* Order Details */}
            <li>
              <Link href="/order-details">
                <span className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors">
                  <FaList className="mr-3" />
                  <span>Order Details</span>
                </span>
              </Link>
            </li>

            {/* SKU Costing */}
            <li>
              <Link href="/sku-costing">
                <span className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors">
                  <FaMoneyBill className="mr-3" />
                  <span>SKU Costing</span>
                </span>
              </Link>
            </li>

            {/* Inventory */}
            <li>
              <Link href="/inventory">
                <span className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors">
                  <FaWarehouse className="mr-3" />
                  <span>Inventory</span>
                </span>
              </Link>
            </li>

            {/* Reports (collapsible submenu) */}
            <li>
              <button
                onClick={toggleReports}
                className="flex items-center w-full p-2 rounded hover:bg-gray-800 transition-colors focus:outline-none"
              >
                <FaChartLine className="mr-3" />
                <span className="flex-1 text-left">Reports</span>
                {reportsOpen ? (
                  <IoIosArrowDown className="text-xl" />
                ) : (
                  <IoIosArrowForward className="text-xl" />
                )}
              </button>
              {/* Submenu */}
              {reportsOpen && (
                <ul className="pl-10 mt-1 space-y-1">
                  <li>
                    <Link href="/reports/orders">
                      <span className="block p-2 hover:bg-gray-800 rounded transition-colors">
                        Orders Report
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports/returns">
                      <span className="block p-2 hover:bg-gray-800 rounded transition-colors">
                        Returns Report
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports/orderwise">
                      <span className="block p-2 hover:bg-gray-800 rounded transition-colors">
                        Order Wise Reconciliation
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports/sku">
                      <span className="block p-2 hover:bg-gray-800 rounded transition-colors">
                        SKU Reconciliation
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/reports/payment">
                      <span className="block p-2 hover:bg-gray-800 rounded transition-colors">
                        Payment Reconciliation
                      </span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Business */}
            <li>
              <Link href="/business">
                <span className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors">
                  <FaBook className="mr-3" />
                  <span>Business</span>
                </span>
              </Link>
            </li>

            {/* Reviews */}
            <li>
              <Link href="/reviews">
                <span className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors">
                  <FaClipboardList className="mr-3" />
                  <span>Reviews</span>
                </span>
              </Link>
            </li>

            {/* Channel Integration */}
            <li>
              <Link href="/channel-integration">
                <span className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors">
                  <BsGrid className="mr-3" />
                  <span>Channel Integration</span>
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom items */}
        <div className="border-t border-gray-800 p-4">
          <ul className="space-y-1">
            <li>
              <Link href="/settings">
                <span className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors">
                  <FaCog className="mr-3" />
                  <span>Settings</span>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <span className="flex items-center p-2 rounded hover:bg-gray-800 transition-colors">
                  <FaSignOutAlt className="mr-3" />
                  <span>Logout</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
