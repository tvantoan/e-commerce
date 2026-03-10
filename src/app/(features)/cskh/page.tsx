"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Comment from "@/types/Comment";

type User = {
  name: string;
  email: string;
  satisfaction_score: number;
  rating_count: number;
};

type Product = {
  name: string;
  basePrice: number;
  salePrice: number;
  rating_score: number;
  comment: Comment[];
};

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        const data = res.data;
        console.log(data);

        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        const data = res.data;
        console.log(data);

        setUsers(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="space-y-10 p-10">
      {/* USERS TABLE */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Customer Satisfaction</h2>

        <div className="overflow-hidden rounded-xl border">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Satisfaction</th>
                <th className="p-3">Ratings Count</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.satisfaction_score}</td>
                  <td className="p-3">{user.rating_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* PRODUCTS TABLE */}
      <div>
        <h2 className="mb-4 text-2xl font-bold">Product Satisfaction</h2>

        <div className="overflow-hidden rounded-xl border">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Product</th>
                <th className="p-3">Base Price</th>
                <th className="p-3">Sale Price</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Comments</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product, i) => (
                <tr key={i} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-medium">{product.name}</td>
                  <td className="p-3">{product.basePrice}</td>
                  <td className="p-3">{product.salePrice}</td>
                  <td className="p-3">{product.rating_score}</td>
                  <td className="p-3">{product.comment?.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
