/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useIntl } from 'react-intl'
import { KTSVG } from '../../../helpers'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { AsideMenuItem } from './AsideMenuItem'
import {Link} from 'react-router-dom'

export function AsideMenuMain() {
  const intl = useIntl()
  const bgWhite = {}
  return (
    <>
     <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({ id: 'MENU.DASHBOARD' })}
        fontIcon='bi-app-indicator'
      />
      <div className="menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold" id="#kt_aside_menu" data-kt-menu="true">

        <div data-kt-menu-trigger="click" data-kt-menu-placement="right-start" className="menu-item py-3">
          <span className="menu-link menu-center" title="" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" data-bs-original-title="Crafted">
            <span className="menu-icon me-0">
              <i className="bi bi-gear fs-1"></i>
            </span>
            <span className="menu-title">Configuration</span>
          </span>
          <div className="menu-sub menu-sub-dropdown w-225px w-lg-275px px-1 py-4">
            <div data-kt-menu-trigger="click" className="menu-item">
              <span className="menu-link-items bgWhite">
                <span className="menu-bullet">
                  <span className="bullet bullet-dot"></span>
                </span>
                <span className="menu-title">
                  <Link to="/companies">Sociétés</Link>
                </span>
              </span>
            </div>
            <div data-kt-menu-trigger="click" className="menu-item">
              <span className="menu-link-items bgWhite">
                <span className="menu-bullet">
                  <span className="bullet bullet-dot"></span>
                </span>
                <Link to="/directions">Directions</Link>
              </span>
            </div>
            <div data-kt-menu-trigger="click" className="menu-item">
              <span className="menu-link-items bgWhite">
                <span className="menu-bullet">
                  <span className="bullet bullet-dot"></span>
                </span>
                <Link to="/departments">Départements</Link>
              </span>
            </div>
            <div data-kt-menu-trigger="click" className="menu-item">
              <span className="menu-link-items bgWhite">
                <span className="menu-bullet">
                  <span className="bullet bullet-dot"></span>
                </span>
                <Link to="/supervisions">Supervions</Link>
              </span>
            </div>

          </div>
        </div>
        <div data-kt-menu-trigger="click" data-kt-menu-placement="right-start" className="menu-item py-3">
          <span className="menu-link menu-center" title="" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-dismiss="click" data-bs-placement="right" data-bs-original-title="Crafted">
            <span className="menu-icon me-0">
              <i className="bi bi-calendar fs-1"></i>
            </span>
            <span className="menu-title">Planification</span>
          </span>
          <div className="menu-sub menu-sub-dropdown w-225px w-lg-275px px-1 py-4">
          <div data-kt-menu-trigger="click" className="menu-item">
              <span className="menu-link-items bgWhite">
                <span className="menu-bullet">
                  <span className="bullet bullet-dot"></span>
                </span>
                <Link to="/groups">Groupes Astreintes</Link>
              </span>
            </div>
            <div data-kt-menu-trigger="click" className="menu-item">
              <span className="menu-link-items bgWhite">
                <span className="menu-bullet">
                  <span className="bullet bullet-dot"></span>
                </span>
                <span className="menu-title">
                  <Link to="/teams">Equipes Astreintes</Link>
                </span>
              </span>
            </div>
            <div data-kt-menu-trigger="click" className="menu-item">
              <span className="menu-link-items bgWhite">
                <span className="menu-bullet">
                  <span className="bullet bullet-dot"></span>
                </span>
                <Link to="/program">Programmes Astreintes Normales</Link>
              </span>
            </div>
            <div data-kt-menu-trigger="click" className="menu-item">
              <span className="menu-link-items bgWhite">
                <span className="menu-bullet">
                  <span className="bullet bullet-dot"></span>
                </span>
                <Link to="/program-quart">Programmes Astreintes Quart</Link>
              </span>
            </div>
            <div data-kt-menu-trigger="click" className="menu-item">
              <span className="menu-link-items bgWhite">
                <span className="menu-bullet">
                  <span className="bullet bullet-dot"></span>
                </span>
                <Link to="/groups">Archives Astreintes</Link>
              </span>
            </div>

          </div>
        </div>
      </div>
      {/*
    
   
     
       */}
      {/*<AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      />*/}
      {/*

         <div classNameName='menu-item'>
        <div classNameName='menu-content pt-8 pb-2'>
          <span classNameName='menu-section text-muted text-uppercase fs-8 ls-1'>Gonfiguration</span>
        </div>
      </div>
      <AsideMenuItem
        to='/companies'
        title='Societés'
        fontIcon='bi-archive'
        icon='/media/icons/duotune/general/gen022.svg'
      >
        <AsideMenuItem
          to='/departments'
          title='Départements'
          fontIcon='bi-archive'
          icon='/media/icons/duotune/general/gen022.svg'
        ></AsideMenuItem>
      </AsideMenuItem>

      <div classNameName='menu-item'>
        <div classNameName='menu-content pt-8 pb-2'>
          <span classNameName='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
     */}

    </>
  )
}
