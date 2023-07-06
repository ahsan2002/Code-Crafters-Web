import React from 'react'
import './MemberRegistration.css'
import Layout from '../../Layout/Layout';
import Form from './MemberReg/Form';
import SideBar from './Sidebar/Sidebar';


const MemberReg = () => {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="row">
            <div class="member-left-col col-11 col-lg-4 col-md-4 mx-auto">
              <SideBar />
            </div>
            <div class="member-right-col col-11 col-lg-8 col-md-8 mx-auto">
              <Form />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default MemberReg