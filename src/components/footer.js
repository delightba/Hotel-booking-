import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
      <footer className='mt-5 w-100'>
        <div className='first-footer p-5'>
          <div className='row container'>
            <div className='d-flex gap-2 col-sm-12 col-md-12 col-lg-5'>
              <img className='mail-pic' src="../images/email.png" alt="email icon" />
              <div>
                <h1 className='text-white fw-bolder'>Newsletter</h1>
                <p className='text-secondary'>Subscribe now to get our latest blog posts.</p>
              </div>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-7'>
              <InputGroup className="mb-3">
                <Form.Control
                  className='col-sm-3'
                  placeholder="Your email"
                  aria-label="Recipient's email"
                  aria-describedby="basic-addon2"
                />
                <Button variant="success fw-bolder" className='col-sm-3' id="button-addon2">
                  Subscribe now
                </Button>
              </InputGroup>
            </div>
          </div>
        </div>
        <div className='bg-dark'>
          <div className="d-flex gap-2 w-25 mx-auto pt-3">
            <h1 className="text-white p-2 rounded" style={{ backgroundColor: '#6610f2' }}>TR</h1>
            <h1 className="fs-5 w-50 ps-1 mt-2" style={{ color: '#f5f5f5' }}>Travel Reservation</h1>
          </div>
          <div className='w-50 mx-auto container py-3 row'>
            <Link className='text-white text-decoration-none px-1 col-sm-12 col-md-4 col-lg-2'>Home</Link>
            <Link className='text-white text-decoration-none px-1 col-sm-12 col-md-4 col-lg-2'>About</Link>
            <Link className='text-white text-decoration-none px-1 col-sm-12 col-md-4 col-lg-2'>Contact Us</Link>
            <Link className='text-white text-decoration-none px-1 col-sm-12 col-md-4 col-lg-2'>Blog</Link>
            <Link className='text-white text-decoration-none px-1 col-sm-12 col-md-4 col-lg-2'>Reviews</Link>
          </div>
          <div className='d-flex gap-3 mx-auto w-25'>
            <Link className='text-white'><FaFacebookF /></Link>
            <Link className='text-white'><FaTwitter /></Link>
            <Link className='text-white'><FaYoutube /></Link>
          </div>
          <p className='text-secondary p-4 w-50 mx-auto'>&copy; Copyright 2024, Travel Reservation Inc. All Rights Reserved.</p>
        </div>
      </footer>
  )
}

export default Footer

