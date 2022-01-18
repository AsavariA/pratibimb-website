import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events-table">
    <h1>Upcomimg Events</h1>
      <table className="events-list">
      <tbody>
        <tr>
          <td>
            <div className="event-date">
              <div className="event-day">18</div>
              <div className="event-month">JAN</div>
            </div>
          </td>
          <td style={{fontWeight: 'lighter'}}>
            Dance Team Launch
          </td>
          <td>
            <a href="/" className="btn btn-grey btn-sm event-more">
              Join Now
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <div className="event-date">
              <div className="event-day">20</div>
              <div className="event-month">JAN</div>
            </div>
          </td>
          <td style={{fontWeight: 'lighter'}}>
            Treasure Hunt
          </td>
          <td>
            <a href="/" className="btn btn-grey btn-sm event-more">
              Join Now
            </a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingEvents;
