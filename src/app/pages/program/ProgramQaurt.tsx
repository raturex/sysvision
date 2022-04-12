import React from "react";
import { PageTitle } from '../../../_metronic/layout/core'
import { KTSVG, toAbsoluteUrl } from "../../../_metronic/helpers";


export function ProgramQuartPage() {
    const monStyle = {
        touchAction: "pan-y",
        WebkitUserDrag: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        height: "352px"
    }
    return (
        <>
            <PageTitle breadcrumbs={[]}>Planning d'astreinte du Quart</PageTitle>

            <div className="row">
                <div className="col-xxl-3 row">
                    <div className="col-lg-12">
                        <form action="#" data-select2-id="select2-data-142-rc5e">

                            <div className="card" data-select2-id="select2-data-141-ylgu">

                                <div className="card-body" data-select2-id="select2-data-140-3tbj">

                                    <div className="position-relative">

                                        <h5 className="fw-bolder">Etablir un Planning</h5>
                                    </div>

                                    <div className="separator separator-dashed my-8"></div>

                                    <div className="mb-5" data-select2-id="select2-data-139-mvat">
                                        <label className="fs-6 form-label fw-bolder text-dark">Type planification</label>

                                        <select className="form-select form-select select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-10-nygq" aria-hidden="true">
                                            <option value="" data-select2-id="select2-data-143-auu0">Sélectionnez un type</option>
                                            <option value="1" data-select2-id="select2-data-144-8joq">Supervision Normale</option>
                                            <option value="3" data-select2-id="select2-data-145-amcn">Supervision Quart</option>
                                        </select>

                                    </div>

                                    <div className="mb-5">
                                        <label className="fs-6 form-label fw-bolder text-dark">Fréquence</label>
                                        <select className="form-select form-select select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-10-nygq" aria-hidden="true">
                                            <option value="" data-select2-id="select2-data-143-auu0">Sélectionnez une fréquence</option>
                                            <option value="1" data-select2-id="select2-data-144-8joq">Hebdomadaire</option>
                                            <option value="3" data-select2-id="select2-data-145-amcn">Mensuelle</option>
                                            <option value="3" data-select2-id="select2-data-145-amcn" disabled>Trimestrielle</option>
                                            <option value="3" data-select2-id="select2-data-145-amcn" disabled>Annuelle</option>
                                        </select>
                                    </div>

                                    <div className="mb-5">
                                        <button className=" fs-6 btn w-100 btn-light-success ">Génerer</button>
                                    </div>

                                </div>

                            </div>

                        </form>
                    </div>
                    <div className="col-lg-12">
                        <div className="mb-5">
                            <a href="#" className="fs-6 btn w-100 btn-secondary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_target"> <i className="bi bi-eye fs-2x"></i> Visualiser le planning</a>
                        </div>
                        <div className="mb-5">
                            <button className=" fs-6 btn w-100 btn-info ">Bon pour accord</button>

                        </div>
                    </div>

                </div>
                <div className="col-xxl-9">
                    <div className="d-flex flex-wrap flex-stack pb-7">
                        <div className="d-flex flex-wrap align-items-center my-1">
                            <h4 className="fw-bolder me-5 my-1"> Planning Hedbomadaire</h4> <h4 className="fw-bolder me-5 my-1">|</h4> <h3 className="fw-bolder me-5 my-1">Semaine du </h3> <div className="badge badge-light-warning"> 09 Avril - 17 Avril</div>
                        </div>
                    </div>

                    <div className="card card-flush h-lg-100">

                        <div className="card-body p-9 pt-4">

                            <ul className="nav nav-pills d-flex flex-nowrap hover-scroll-x py-2">

                                <li className="nav-item me-6">
                                    <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-85px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_0">
                                        <span className="opacity-50 fs-7 fw-bold">Lun</span>
                                        <span className="fs-6 fw-bolder">22</span>
                                    </a>
                                </li>


                                <li className="nav-item me-6">
                                    <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-85px me-2 py-4 px-3 btn-active-primary active" data-bs-toggle="tab" href="#kt_schedule_day_1">
                                        <span className="opacity-50 fs-7 fw-bold">Mar</span>
                                        <span className="fs-6 fw-bolder">23</span>
                                    </a>
                                </li>


                                <li className="nav-item me-6">
                                    <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-85px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_2">
                                        <span className="opacity-50 fs-7 fw-bold">Mer</span>
                                        <span className="fs-6 fw-bolder">24</span>
                                    </a>
                                </li>


                                <li className="nav-item me-6">
                                    <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-85px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_3">
                                        <span className="opacity-50 fs-7 fw-bold">Jeu</span>
                                        <span className="fs-6 fw-bolder">25</span>
                                    </a>
                                </li>


                                <li className="nav-item me-6">
                                    <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-85px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_4">
                                        <span className="opacity-50 fs-7 fw-bold">Ven</span>
                                        <span className="fs-6 fw-bolder">26</span>
                                    </a>
                                </li>


                                <li className="nav-item me-6">
                                    <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-85px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_5">
                                        <span className="opacity-50 fs-7 fw-bold">Sam</span>
                                        <span className="fs-6 fw-bolder">27</span>
                                    </a>
                                </li>


                                <li className="nav-item me-6">
                                    <a className="nav-link btn d-flex flex-column flex-center rounded-pill min-w-85px me-2 py-4 px-3 btn-active-primary" data-bs-toggle="tab" href="#kt_schedule_day_6">
                                        <span className="opacity-50 fs-7 fw-bold">Dim</span>
                                        <span className="fs-6 fw-bolder">28</span>
                                    </a>
                                </li>
                            </ul>                       {/* end::Dates*/}
                            {/* begin::Tab Content*/}
                            <div className="tab-content">
                                {/* begin::Day*/}
                                <div id="kt_schedule_day_0" className="tab-pane fade show active">
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}

                                        <div className="position-absolute h-100 w-4px bg-success rounded top-0 start-0"></div>

                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">07:30 - 12:30
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Ouattara Asta </a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">07 08 01 77 30</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-warning rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">11:00 - 11:45
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sogolon Tchedjougou</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Mark Randall</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-danger rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">16:30 - 17:30
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Walter White</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                </div>
                                {/* end::Day*/}
                                {/* begin::Day*/}
                                <div id="kt_schedule_day_1" className="tab-pane fade show">
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">14:30 - 15:30
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Kendell Trevor</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">16:30 - 17:30
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Lunch &amp; Learn Catch Up</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Peter Marcus</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">10:00 - 11:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Koudio Kouakou Jacob</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Naomi Hayabusa</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                </div>
                                {/* end::Day*/}
                                {/* begin::Day*/}
                                <div id="kt_schedule_day_2" className="tab-pane fade show">
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">14:30 - 15:30
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Michael Walters</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">12:00 - 13:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Peter Marcus</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">12:00 - 13:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Kendell Trevor</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                </div>
                                {/* end::Day*/}
                                {/* begin::Day*/}
                                <div id="kt_schedule_day_3" className="tab-pane fade show">
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">13:00 - 14:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Dashboard UI/UX Design Review</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">David Stevenson</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">9:00 - 10:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Caleb Donaldson</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">16:30 - 17:30
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">David Stevenson</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                </div>
                                {/* end::Day*/}
                                {/* begin::Day*/}
                                <div id="kt_schedule_day_4" className="tab-pane fade show">
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">16:30 - 17:30
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Michael Walters</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">12:00 - 13:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Committee Review Approvals</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Karina Clarke</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">9:00 - 10:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Creative Content Initiative</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Kendell Trevor</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                </div>
                                {/* end::Day*/}
                                {/* begin::Day*/}
                                <div id="kt_schedule_day_5" className="tab-pane fade show">
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">13:00 - 14:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Weekly Team Stand-Up</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Karina Clarke</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">12:00 - 13:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Team Backlog Grooming Session</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Terry Robins</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">14:30 - 15:30
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Development Team Capacity Review</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Mark Randall</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                </div>
                                {/* end::Day*/}
                                {/* begin::Day*/}
                                <div id="kt_schedule_day_6" className="tab-pane fade show">
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">13:00 - 14:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Sales Pitch Proposal</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">Walter White</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">16:30 - 17:30
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">Marketing Campaign Discussion</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">David Stevenson</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                    {/* begin::Time*/}
                                    <div className="d-flex flex-stack position-relative mt-8">
                                        {/* begin::Bar*/}
                                        <div className="position-absolute h-100 w-4px bg-secondary rounded top-0 start-0"></div>
                                        {/* end::Bar*/}
                                        {/* begin::Info*/}
                                        <div className="fw-bold ms-5 text-gray-600">
                                            {/* begin::Time*/}
                                            <div className="fs-5">12:00 - 13:00
                                            </div>
                                            {/* end::Time*/}
                                            {/* begin::Title*/}
                                            <a href="#" className="fs-5 fw-bolder text-gray-800 text-hover-primary mb-2">9 Degree Project Estimation Meeting</a>
                                            {/* end::Title*/}
                                            {/* begin::User*/}
                                            <div className="text-gray-400">Contacts : &nbsp;
                                                <a href="#">David Stevenson</a></div>
                                            {/* end::User*/}
                                        </div>
                                        {/* end::Info*/}
                                        {/* begin::Action*/}
                                        <a href="#" className="btn btn-bg-light btn-active-color-primary btn-sm"> <i className="bi bi-eye fs-1"></i>Voir Rapport</a>
                                        {/* end::Action*/}
                                    </div>
                                    {/* end::Time*/}
                                </div>
                                {/* end::Day*/}

                            </div>
                            {/* end::Tab Content*/}
                        </div>
                        {/* end::Card body*/}
                    </div>

                </div>
                <div className='modal fade' id='kt_modal_new_target' aria-hidden='true'>
                    <div className='modal-dialog modal-dialog-centered mw-900px'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <h2>Planning Hebdomadaire</h2>

                                <div className='btn btn-sm btn-icon btn-active-color-primary' data-bs-dismiss='modal'>
                                    <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-1' />
                                </div>
                            </div>

                            <div className='modal-body py-lg-10 px-lg-10'>

                                <div className="table-responsive h-500px">

                                    <div id="kt_project_users_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                        <div className="table-responsive">
                                            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-3'>
                                                {/* begin::Table head */}
                                                <thead>
                                                    <tr className='fw-bolder text-muted'>
                                                        <th className='min-w-200px'>Noms & prénoms</th>
                                                        <th>Lundi</th>
                                                        <th>Mardi</th>
                                                        <th>Mercredi</th>
                                                        <th>Jeudi</th>
                                                        <th>Vendredi</th>
                                                        <th>Samedi</th>
                                                        <th>Dimanche</th>
                                                    </tr>
                                                </thead>
                                                {/* end::Table head */}
                                                {/* begin::Table body */}
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='d-flex justify-content-start flex-column'>
                                                                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                                        Yardima D. Hamed
                                                                    </a>
                                                                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                                        08 08 08 08 08
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Jour</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-danger">Nuit</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-warning">A.Midi</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='d-flex justify-content-start flex-column'>
                                                                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                                        Yardima D. Hamed
                                                                    </a>
                                                                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                                        08 08 08 08 08
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Jour</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-danger">Nuit</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-warning">A.Midi</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='d-flex justify-content-start flex-column'>
                                                                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                                        Koffi Moise
                                                                    </a>
                                                                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                                        08 08 08 08 08
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Jour</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-danger">Nuit</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-warning">A.Midi</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='d-flex justify-content-start flex-column'>
                                                                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                                        Yardima D. Hamed
                                                                    </a>
                                                                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                                        08 08 08 08 08
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Jour</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-danger">Nuit</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-warning">A.Midi</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='d-flex justify-content-start flex-column'>
                                                                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                                        Yardima D. Hamed
                                                                    </a>
                                                                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                                        08 08 08 08 08
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Jour</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-danger">Nuit</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-warning">A.Midi</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='d-flex justify-content-start flex-column'>
                                                                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                                        Yardima D. Hamed
                                                                    </a>
                                                                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                                        08 08 08 08 08
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Jour</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-danger">Nuit</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-warning">A.Midi</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className='d-flex align-items-center'>
                                                                <div className='d-flex justify-content-start flex-column'>
                                                                    <a href='#' className='text-dark fw-bolder text-hover-primary fs-6'>
                                                                        Yardima D. Hamed
                                                                    </a>
                                                                    <span className='text-muted fw-bold text-muted d-block fs-7'>
                                                                        08 08 08 08 08
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Jour</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-danger">Nuit</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-warning">A.Midi</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        <td className="text-black fw-bold fs-7">
                                                            <span className="badge badge-light-primary">Matin</span>
                                                        </td>
                                                        
                                                    </tr>
                                                </tbody>
                                                {/* end::Table body */}
                                            </table>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>


    )


}