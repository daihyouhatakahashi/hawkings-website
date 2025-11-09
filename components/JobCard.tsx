'use client'

import { useState } from 'react'

interface JobCardProps {
  id: string
  title: string
  subtitle?: string
  roles: string[]
  requiredSkills: string[]
  welcomeSkills: string[]
  mandatorySkills?: string[]
}

export default function JobCard({
  id,
  title,
  subtitle,
  roles,
  requiredSkills,
  welcomeSkills,
  mandatorySkills,
}: JobCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border border-hawkings-border">
      <div
        className="flex justify-between items-center p-6 md:p-12 cursor-pointer hover:bg-hawkings-bg-alt transition-hawkings"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h4 className="font-serif text-xl md:text-2xl font-normal tracking-wide">
          {title}
          {subtitle && (
            <span className="text-base text-hawkings-gray font-light ml-4">{subtitle}</span>
          )}
        </h4>
        <span
          className={`text-[28px] text-hawkings-gray font-light transition-transform duration-300 ${
            isExpanded ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all duration-400 ${
          isExpanded ? 'max-h-[5000px] opacity-100 p-6 md:p-12 pt-0' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mb-12 mt-8">
          <h5 className="text-xs font-medium uppercase tracking-wide text-hawkings-gray mb-6">
            主な役割
          </h5>
          <ul className="space-y-0">
            {roles.map((role, index) => (
              <li
                key={index}
                className={`text-[15px] text-hawkings-charcoal py-[14px] font-light leading-relaxed ${
                  index < roles.length - 1 ? 'border-b border-hawkings-border' : ''
                }`}
              >
                {role}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h5 className="text-xs font-medium uppercase tracking-wide text-hawkings-gray mb-6">
              求めるスキル・経験
            </h5>
            <ul className="space-y-0">
              {requiredSkills.map((skill, index) => (
                <li
                  key={index}
                  className={`text-[15px] text-hawkings-charcoal py-[14px] font-light leading-relaxed ${
                    index < requiredSkills.length - 1 ? 'border-b border-hawkings-border' : ''
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-medium uppercase tracking-wide text-hawkings-gray mb-6">
              歓迎スキル
            </h5>
            <ul className="space-y-0">
              {welcomeSkills.map((skill, index) => (
                <li
                  key={index}
                  className={`text-[15px] text-hawkings-charcoal py-[14px] font-light leading-relaxed ${
                    index < welcomeSkills.length - 1 ? 'border-b border-hawkings-border' : ''
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {mandatorySkills && mandatorySkills.length > 0 && (
          <div className="bg-hawkings-bg-alt p-8 border border-hawkings-border">
            <h5 className="text-xs font-medium uppercase tracking-wide text-hawkings-gray mb-6">
              必須事項
            </h5>
            <ul className="space-y-0">
              {mandatorySkills.map((skill, index) => (
                <li
                  key={index}
                  className={`text-[15px] text-hawkings-charcoal py-[14px] font-light leading-relaxed ${
                    index < mandatorySkills.length - 1 ? 'border-b border-hawkings-border' : ''
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
