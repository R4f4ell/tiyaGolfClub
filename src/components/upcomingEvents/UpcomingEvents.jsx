import './upcomingEvents.scss'

const UpcomingEvents = () => {
  return (
    <section className="upcoming-events">
      <div className="upcoming-events__container">
        <h2 className="upcoming-events__title">Upcoming Events</h2>
        <div className="upcoming-events__list">

          <div className="upcoming-events__item upcoming-events__item--transparent">
            <div className="event__media"></div>
            <div className="event__date">
              <span className="event__day">24</span>
              <span className="event__month">Feb 2048</span>
            </div>
            <div className="event__details">
              <h3 className="event__name">Private activities</h3>
              <p className="event__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <hr />
              <ul className="event__meta">
                <li className="event__meta-item">
                  <strong>Location:</strong> National Center, NYC
                </li>
                <li className="event__meta-item">
                  <strong>Ticket:</strong> $250
                </li>
              </ul>
              <button className="event__button">Buy Ticket</button>
            </div>
          </div>

          <div className="upcoming-events__item upcoming-events__item--white">
            <div className="event__media"></div>
            <div className="event__date">
              <span className="event__day">28</span>
              <span className="event__month">Feb 2048</span>
            </div>
            <div className="event__details">
              <h3 className="event__name">Group tournament activities</h3>
              <p className="event__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <hr />
              <ul className="event__meta">
                <li className="event__meta-item">
                  <strong>Location:</strong> National Center, NYC
                </li>
                <li className="event__meta-item">
                  <strong>Ticket:</strong> $350
                </li>
              </ul>
              <button className="event__button">Buy Ticket</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default UpcomingEvents
