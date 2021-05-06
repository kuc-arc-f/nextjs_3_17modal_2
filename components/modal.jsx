import Link from 'next/link';
import React from 'react';
//
export default class Page extends React.Component {
  constructor(props){
    super(props)
//console.log(this.props.name)
    this.state = {
      modalCloseName: this.props.name + "-closeModal" ,
      modalBgName: this.props.name + "-modalBg" ,
    };
  }  
  componentDidMount(){
    const modalArea = document.getElementById(this.props.name);
    const closeModal = document.getElementById(this.state.modalCloseName);
    const modalBg = document.getElementById(this.state.modalBgName);
    const toggle = [closeModal,modalBg];
    var len = 0;
    for(var i=0, len=toggle.length ; i<len ; i++){
      toggle[i].addEventListener('click',function(){
        modalArea.classList.toggle('is-show');
      },false);
    }
  }  
  render(){
    return (
    <div className="modal_wrap">
      <section id={this.props.name} className="modalArea">
        <div id={this.state.modalBgName} className="modalBg"></div>
        <div className="modalWrapper rounded-lg">
          <div className="modalContents">
            <h3 className="text-3xl font-bold">{this.props.title}
            </h3>
            <hr className="my-2" />
            <p>{this.props.body}</p>
            <hr className="my-2" / >
            <button className="closeModal btn-blue" id={this.state.modalCloseName}>
              Close</button>
          </div>
        </div>
      </section>
      <style>{`
      .modalArea {
        visibility: hidden;
        opacity : 0;  
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: .4s;
      }
      .modalBg {
        width: 100%;
        height: 100%;
        background-color: rgba(30,30,30,0.9);
      }
      .modalWrapper {
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
        width: 70%;
        max-width: 500px;
        padding: 10px 30px;
        background-color: #fff;
      }
      `}</style>
    </div>
    )
  }
}
