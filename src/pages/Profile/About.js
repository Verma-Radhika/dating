import "./ProfileStyles/about.css";
// import "./ProfileStyles/profile.css";
export const About = () => {
  return (
    <div class="tab-content p-0">
      <div class="tab-pane fade in active show" id="profile-about">
        <div class="table-responsive">
          <table class="table table-profile">
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
              <tr class="highlight">
                <td class="field">Mood</td>
                <td>
                  <a href="javascript:;">Add Mood Message</a>
                </td>
              </tr>
              <tr class="divider">
                <td colspan="2"></td>
              </tr>
              <tr>
                <td class="field">Mobile</td>
                <td>
                  <i class="fa fa-mobile fa-lg m-r-5"></i> +1-(847)- 367-8924{" "}
                  <a href="javascript:;" class="m-l-5">
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td class="field">Home</td>
                <td>
                  <a href="javascript:;">Add Number</a>
                </td>
              </tr>
              <tr>
                <td class="field">Office</td>
                <td>
                  <a href="javascript:;">Add Number</a>
                </td>
              </tr>
              <tr class="divider">
                <td colspan="2"></td>
              </tr>
              <tr class="highlight">
                <td class="field">About Me</td>
                <td>
                  <a href="javascript:;">Add Description</a>
                </td>
              </tr>
              <tr class="divider">
                <td colspan="2"></td>
              </tr>
              <tr>
                <td class="field">Country/Region</td>
                <td>
                  <select
                    class="form-control input-inline input-xs"
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
                <td class="field">City</td>
                <td>Los Angeles</td>
              </tr>
              <tr>
                <td class="field">State</td>
                <td>
                  <a href="javascript:;">Add State</a>
                </td>
              </tr>
              <tr>
                <td class="field">Website</td>
                <td>
                  <a href="javascript:;">Add Webpage</a>
                </td>
              </tr>
              <tr>
                <td class="field">Gender</td>
                <td>
                  <select
                    class="form-control input-inline input-xs"
                    name="gender"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="field">Birthdate</td>
                <td>
                  <select class="form-control input-inline input-xs" name="day">
                    <option value="04" selected="">
                      04
                    </option>
                  </select>
                  -
                  <select
                    class="form-control input-inline input-xs"
                    name="month"
                  >
                    <option value="11" selected="">
                      11
                    </option>
                  </select>
                  -
                  <select
                    class="form-control input-inline input-xs"
                    name="year"
                  >
                    <option value="1989" selected="">
                      1989
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="field">Language</td>
                <td>
                  <select
                    class="form-control input-inline input-xs"
                    name="language"
                  >
                    <option value="" selected="">
                      English
                    </option>
                  </select>
                </td>
              </tr>
              <tr class="divider">
                <td colspan="2"></td>
              </tr>
              <tr class="highlight">
                <td class="field">&nbsp;</td>
                <td class="p-t-10 p-b-10">
                  <button type="submit" class="btn btn-primary width-150">
                    Update
                  </button>
                  <button
                    type="submit"
                    class="btn btn-white btn-white-without-border width-150 m-l-5"
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
