import { useState } from "react"
import { Link } from "react-router-dom"

export const Sidebar = () => {
    const [openSection, setOpenSection] = useState<string | null>(null)

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section)
    }

    return (
        <div className="bg-[#2d3a55] w-[250px] h-[100vh] shadow-lg px-6 py-4">
            <nav>
                <ul>
                    <li className="text-[#cbcbcb] hover:text-white transition-all" onClick={() => toggleSection('products')}>
                        <button className="flex justify-between w-full text-[18px]">
                            Products
                            <span>{openSection === 'products' ? "-" : "+"}</span>
                        </button>
                        {openSection === 'products' && (
                            <ul>
                                <li>
                                    <Link to="/products">All Products</Link>
                                </li>
                                <li>
                                    <Link to="/create_product">Create Product</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className="text-[#cbcbcb] hover:text-white transition-all" onClick={() => toggleSection('users_types')}>
                        <button className="flex justify-between w-full text-[18px]">
                            Users Types
                            <span>{openSection === 'users_types' ? "-" : "+"}</span>
                        </button>
                        {openSection === 'users_types' && (
                            <ul>
                                <li>
                                    <Link to="/users_types">All Users Types</Link>
                                </li>
                                <li>
                                    <Link to="/create_user_type">Create User Type</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    )
}