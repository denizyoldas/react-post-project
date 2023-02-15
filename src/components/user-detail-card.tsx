import React from 'react'
import { Userdetail } from '../types/user.model'

interface Props {
  user: Userdetail | undefined
}

export default function UserDetailCard({ user }: Props) {
  const {
    id,
    title,
    firstName,
    lastName,
    gender,
    email,
    dateOfBirth,
    registerDate,
    phone,
    picture,
    location
  } = user || {}

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src={picture}
              alt="avatar"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium leading-5 text-gray-900">
              {firstName} {lastName}
            </p>
            <p className="text-sm leading-5 text-gray-500">{email}</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-sm leading-5 text-gray-900">
          <p className="mb-2">
            <span className="font-medium">Phone:</span> {phone}
          </p>
          <p className="mb-2">
            <span className="font-medium">ID:</span> {id}
          </p>
          <p className="mb-2">
            <span className="font-medium">Title:</span> {title}
          </p>
          <p className="mb-2">
            <span className="font-medium">Gender:</span> {gender}
          </p>
          <p className="mb-2">
            <span className="font-medium">Date of Birth:</span> {dateOfBirth}
          </p>
          <p className="mb-2">
            <span className="font-medium">Register Date:</span> {registerDate}
          </p>
          <p className="mb-2">
            {Object.entries(location).map(([key, value]) => (
              <span key={key}>
                <>
                  <span className="font-medium">{key}:</span> {value}
                </>
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}
