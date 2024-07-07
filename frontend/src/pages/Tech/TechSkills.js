import React from 'react'
import './TechSkills.css'
import { TechSkillList } from '../../utils/TechSkillList'
import { FaHtml5 } from 'react-icons/fa';
const TechSkills = () => {
  return (
    <>
      <div className="container techstack" id='tech'>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Tech Skills</h2>
        <hr />
        <p className="pb-3 text-center">
          👉 Including Programming Lanuages, Frameworks, databases, Front-end,
          Back-end and APIs
        </p>

        <div className="row">
          {TechSkillList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex  justify-content-center">
                      <div className="alig-self-center">
                        <tech.icon className="tech-icon" />
                      </div>
                      <div className='media-body'>
                            <h5>{tech.name}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TechSkills