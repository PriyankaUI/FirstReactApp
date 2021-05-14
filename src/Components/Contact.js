import React,{useState} from 'react'

function Contact() {
    const [data, setdata] = useState({
        fullname:'',
        phn:'',
        email:'',
        msg:''
    });

    const InputEvent=(event)=>{
   const {name,value}= event.target;
   setdata((preval)=>{
        return{
            ...preval,
            [name]:value,
        }
   })
    }

    const formsubmit=(e)=>{
  e.preventDefault();
  alert(`successfully submited`)
    }
    return (
        <>
            <div className=" my-4">
                <h2 className="text-center">Contact Us</h2>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                        <div className="mb-2">
                                <label for="" className="form-label">Name</label>
                                <input type="text" className="form-control" id="" aria-describedby="emailHelp"  name="fullname" value={data.fullname} onChange={InputEvent} />
                            </div>
                            <div className="mb-2">
                                <label for="" className="form-label">Phone No</label>
                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" name="phn" value={data.phn} onChange={InputEvent}/>
                            </div>
                            <div className="mb-2">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="" aria-describedby="emailHelp" name="email" value={data.email} onChange={InputEvent}/>
                            </div>
                                
                                 <div class="mb-2">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg}></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <button class="btn btn-outline-primary" type="submit" >Submit form</button>
                                    </div>
                                   </form>
                                </div>
                            </div>

           </div>
        </>
    )
}

export default Contact
