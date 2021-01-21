import React from 'react';
/* eslint-disable */
import { useForm } from 'react-hook-form';

import './style.css';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section class="page-section" id="CONTACT">
      <div class="container">

        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>



        <div class="row">
          <div class="col-lg-8 mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="contactForm"
              name="sentMessage"
              novalidate="novalidate">
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Name</label>
                  <input
                    name="name"
                    className="form-control"
                    id="name" type="text"
                    placeholder="Name"
                    required="required"
                    data-validation-required-message="Please enter your name."
                    ref={register({ required: true, minLength: { value: 5, message: 'pls enter at least 5 character' } })}
                  />
                  {errors.name && <p className="character">{errors.name.message}</p>}
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Email Address</label>
                  <input
                      name="email"
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                      ref={register({
                        required: 'Required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'pls enter rigth email',
                        },
                      })}
                    />
                  {errors.email && <p className="character">{errors.email.message}</p>}
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div class="control-group">
                <div class="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Phone Number</label>
                  <input
                      name="phone"
                      className="form-control"
                      id="phone" type="tel"
                      placeholder="Phone Number"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                      ref={register({
                        required: 'Required',
                        pattern: {
                          value: /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
                          message: 'pls enter number',
                        },
                      })}
                    />
                    {errors.phone && <p className="character">{errors.phone.message}</p>}
                  <p class="help-block text-danger"></p>
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <label>Message</label>
                  <textarea
                      name="Message"
                      ref={register({
                        required: 'Required',
                        pattern: {
                          value: /^[a-z0-100_-]{3,16}$/,
                          message: 'pls dont endter special character',
                        },
                      })}
                      className="form-control" id="message" rows="5" placeholder="Message" required="required" data-validation-required-message="Please enter a message." />
                  {errors.Message && <p className="character">{errors.Message.message}</p>}
                  <p className="help-block text-danger" />
                </div>
              </div>
              <br />
              <div id="success" />
              <div className="form-group" id="btnSend"><button class="btn btn-primary btn-xl p-3 " id="sendMessageButton" type="submit">Send</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
