import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './membership.scss';

const Membership = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Obrigado por se juntar ao Tiya!');
  };

  return (
    <div className="section-principal">
      {/* Título */}
      <h1 className="section-principal__title">Membership at Tiya</h1>

      <div className="centralizar-conteiners">
        {/* Parágrafo e Tabela */}
        <div className="membership-table">
          <p className="membership-table__subtitle">Membership Fees</p>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Yearly Access</th>
                  <th>T1 $420</th>
                  <th>T2 $640</th>
                  <th>T3 $860</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Golf Insurance</td>
                  <td><FaCheckCircle className="icon-check" /></td>
                  <td><FaCheckCircle className="icon-check" /></td>
                  <td><FaCheckCircle className="icon-check" /></td>
                </tr>
                <tr>
                  <td>Club Facilities</td>
                  <td><FaCheckCircle className="icon-check" /></td>
                  <td><FaCheckCircle className="icon-check" /></td>
                  <td><FaCheckCircle className="icon-check" /></td>
                </tr>
                <tr>
                  <td>Country Club</td>
                  <td><FaTimesCircle className="icon-times" /></td>
                  <td><FaCheckCircle className="icon-check" /></td>
                  <td><FaCheckCircle className="icon-check" /></td>
                </tr>
                <tr>
                  <td>Weekend Seasonal</td>
                  <td><FaTimesCircle className="icon-times" /></td>
                  <td><FaCheckCircle className="icon-check" /></td>
                  <td><FaCheckCircle className="icon-check" /></td>
                </tr>
                <tr>
                  <td>Premium Courses</td>
                  <td><FaTimesCircle className="icon-times" /></td>
                  <td><FaTimesCircle className="icon-times" /></td>
                  <td><FaCheckCircle className="icon-check" /></td>
                </tr>
                <tr>
                  <td>Pro's Networking</td>
                  <td><FaTimesCircle className="icon-times" /></td>
                  <td><FaTimesCircle className="icon-times" /></td>
                  <td><FaCheckCircle className="icon-check" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Parágrafo e Formulário */}
        <div className="membership-form">
          <p className="membership-form__subtitle">Please join us!</p>
          <div className="form-card">
            <h3>Become a member</h3>
            <form onSubmit={handleSubmit} className="membership-form__form">
              <input
                type="text"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                placeholder="Email address"
                required
              />
              <textarea
                placeholder="Comments"
                rows={4}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;