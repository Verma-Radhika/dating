import { useState } from "react";
import "./ProfileStyles/about.css";
// import "./ProfileStyles/profile.css";

export const About = () => {
  const [open, setOpen] = useState(false);
  const handleToUpdate = () => {
    setOpen(!open);
  };

  return (
    <div className="tab-content p-0">
      <div className="tab-pane fade in active show" id="profile-about">
        <div className="table-responsive">
          <table className="table table-profile">
            <thead>
              <tr>
                <th></th>
                <th>
                  <h4>
                    Micheal Meyer <small>Lorraine Stokes</small>
                  </h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="highlight">
                <td className="field">Mood</td>
                <td>
                  <a href="javascript:;">Add Mood Message</a>
                </td>
              </tr>
              <tr className="divider">
                <td colspan="2"></td>
              </tr>
              <tr>
                <td className="field">Mobile</td>
                <td>
                  <i className="fa fa-mobile fa-lg m-r-5"></i> +1-(847)-
                  367-8924{" "}
                  <a href="javascript:;" className="m-l-5">
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td className="field">Home</td>
                <td>
                  <a href="javascript:;">Add Number</a>
                </td>
              </tr>
              <tr>
                <td className="field">Office</td>
                <td>
                  <a href="javascript:;">Add Number</a>
                </td>
              </tr>
              <tr className="divider">
                <td colspan="2"></td>
              </tr>
              <tr className="highlight">
                <td className="field">About Me</td>
                <td>
                  <a href="javascript:;">Add Description</a>
                </td>
              </tr>
              <tr className="divider">
                <td colspan="2"></td>
              </tr>
              <tr>
                <td className="field">Country/Region</td>
                <td>
                  <select
                    className="form-control input-inline input-xs"
                    name="region"
                  >
                    <option value="US" selected="">
                      United State
                    </option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="field">City</td>
                <td>Los Angeles</td>
              </tr>
              <tr>
                <td className="field">State</td>
                <td>
                  <a href="javascript:;">Add State</a>
                </td>
              </tr>
              <tr>
                <td className="field">Website</td>
                <td>
                  <a href="javascript:;">Add Webpage</a>
                </td>
              </tr>
              <tr>
                <td className="field">Gender</td>
                <td>
                  <select
                    className="form-control input-inline input-xs"
                    name="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="field">Birthdate</td>
                <td>
                  <select
                    className="form-control input-inline input-xs"
                    name="day"
                  >
                    <option value="04" selected="">
                      04
                    </option>
                  </select>
                  -
                  <select
                    className="form-control input-inline input-xs"
                    name="month"
                  >
                    <option value="11" selected="">
                      11
                    </option>
                  </select>
                  -
                  <select
                    className="form-control input-inline input-xs"
                    name="year"
                  >
                    <option value="1989" selected="">
                      1989
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="field">Language</td>
                <td>
                  <select
                    className="form-control input-inline input-xs"
                    name="language"
                  >
                    <option value="" selected="">
                      English
                    </option>
                  </select>
                </td>
              </tr>
              <tr className="divider">
                <td colspan="2"></td>
              </tr>
              <tr className="highlight">
                <td className="field">&nbsp;</td>
                <td className="p-t-10 p-b-10">
                  <button
                    type="submit"
                    className="btn btn-primary width-150"
                    onClick={handleToUpdate}
                  >
                    Update
                  </button>
                  <button
                    type="submit"
                    className="btn btn-white btn-white-without-border width-150 m-l-5"
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
