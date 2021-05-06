import React from 'react';
import Layout from '../components/layout'
import Modal from '../components/modal'
//
class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      modal_name:"modalArea1" ,
    };
  }
  componentDidMount(){
    const openModal = document.getElementById('openModal');
    const modalArea = document.getElementById(this.state.modal_name);
    openModal.addEventListener('click',function(){
      modalArea.classList.toggle('is-show');
    },false);  
  }
  render() {
    return (
    <div className="bg-gray-100">
      <Layout>
      <div className="container mx-auto px-5 pb-5 bg-white">
        <h1 className="text-5xl font-bold my-2">Modal-Test</h1>
        <hr className="my-2" /> 
        modal:  
        <hr className="my-2" /> 
        <button className="btn-blue" id="openModal">Open modal
        </button>
        <Modal name={this.state.modal_name}
          title="Modal-test" 
          body={`モーダルの本文の入力テスト、１１１１１
          モーダルの本文の入力テスト、２２２２２`}>
        </Modal>
      </div>
      </Layout>
      <style>{`
      .is-show {
        visibility: visible;
        opacity : 1;
      }
      `}</style>       
    </div>
    );
  }
}
export default Page;
