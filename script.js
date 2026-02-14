/* HOPE INTERNATIONAL HOSPITAL
    Full Data Set for Residency & Fellowship Programs
*/

const programsData = {
    surgical: [
        {
            title: "General Surgery",
            duration: "3 weeks",
            desc: "General Surgery at HIH focuses on abdominal, soft tissue, and trauma management, providing trainees with exposure to both elective and emergency surgical cases. Residents develop skills in pre-operative evaluation, operative assistance, and post-operative care, ensuring confidence in handling surgical patients.",
            weeks: [
                { week: "Week 1", text: "Ward rounds, pre-operative evaluations, minor procedures such as incision and drainage and suturing." },
                { week: "Week 2", text: "OR exposure with laparoscopic and open surgeries; assisting senior surgeons in complex cases." },
                { week: "Week 3", text: "Post-operative care, emergency surgery participation, and on-call duties including acute abdomen management and trauma response." }
            ]
        },
        {
            title: "Neurosurgery",
            duration: "5 weeks",
            desc: "Neurosurgery covers cranial, spinal, and peripheral nerve surgery, emphasizing neurocritical care, imaging interpretation, and complex operative procedures. Trainees work in the Neuro ICU, participate in tumor boards, and assist in surgeries such as craniotomies and spinal procedures.",
            weeks: [
                { week: "Week 1", text: "Neuro ICU: ventilated patient management, pre-operative assessments." },
                { week: "Week 2", text: "Imaging review including MRI, CT, and angiography; neuro consults." },
                { week: "Week 3", text: "OR exposure: craniotomies, spinal surgeries, assisting in complex cases." },
                { week: "Week 4", text: "Post-operative care, ICP monitoring, ICU follow-up." },
                { week: "Week 5", text: "Tumor boards, functional neurosurgery observation, on-call emergencies." }
            ]
        },
        {
            title: "Cardiothoracic Surgery",
            duration: "4 weeks",
            desc: "Cardiothoracic Surgery provides intensive training in cardiac and thoracic procedures, including ICU management, pre-operative planning, and operative assistance in CABG, valve replacement, and thoracic surgeries.",
            weeks: [
                { week: "Week 1", text: "Cardiac ICU: pre-op assessment, echocardiography review, hemodynamic monitoring." },
                { week: "Week 2", text: "OR exposure: CABG, valve replacement, assisting senior surgeons." },
                { week: "Week 3", text: "Post-operative management including chest tubes, ICU rounds, and hemodynamic monitoring." },
                { week: "Week 4", text: "Emergency thoracotomy, heart/lung transplant observation, perioperative management." }
            ]
        },
        {
            title: "Orthopedic Surgery",
            duration: "3 weeks",
            desc: "Orthopedic Surgery focuses on trauma, joint reconstruction, and fracture management, training residents in both operative care and post-operative rehabilitation.",
            weeks: [
                { week: "Week 1", text: "Fracture clinic, casting and splinting, ward rounds." },
                { week: "Week 2", text: "OR exposure: trauma fixation, joint replacement surgeries." },
                { week: "Week 3", text: "Post-operative rehabilitation, follow-up management, emergency fracture interventions." }
            ]
        },
        {
            title: "Plastic & Reconstructive Surgery",
            duration: "3 weeks",
            desc: "Plastic Surgery provides exposure to wound care, minor procedures, microsurgery, and reconstructive operations. Trainees participate in elective and emergency surgeries.",
            weeks: [
                { week: "Week 1", text: "Minor procedures, wound care, outpatient clinic exposure." },
                { week: "Week 2", text: "OR: flap surgeries, microsurgery assistance." },
                { week: "Week 3", text: "Post-operative monitoring, follow-ups, complication management." }
            ]
        },
        {
            title: "Vascular Surgery",
            duration: "3 weeks",
            desc: "Vascular Surgery focuses on diagnosis, imaging, and treatment of vascular diseases, including bypasses and endovascular procedures.",
            weeks: [
                { week: "Week 1", text: "Vascular lab, imaging review, pre-operative assessment." },
                { week: "Week 2", text: "OR exposure: bypass surgeries, endovascular interventions." },
                { week: "Week 3", text: "Post-operative monitoring, emergency vascular intervention management." }
            ]
        },
        {
            title: "Urology",
            duration: "3 weeks",
            desc: "Urology offers training in outpatient evaluation, minor procedures, and operative assistance in endoscopic and open surgeries.",
            weeks: [
                { week: "Week 1", text: "Outpatient evaluation, minor procedures." },
                { week: "Week 2", text: "OR: endoscopic procedures, stone surgeries, assisting senior surgeons." },
                { week: "Week 3", text: "Post-operative care, complication management, patient follow-up." }
            ]
        },
        {
            title: "Otolaryngology (ENT)",
            duration: "3 weeks",
            desc: "ENT training emphasizes head and neck evaluation, minor procedures, and airway management, combining clinical and operative experience.",
            weeks: [
                { week: "Week 1", text: "Clinics, ENT exams, minor procedures." },
                { week: "Week 2", text: "OR: tonsillectomy, adenoidectomy, sinus procedures." },
                { week: "Week 3", text: "Post-operative care, airway emergencies, follow-up." }
            ]
        },
        {
            title: "Ophthalmology",
            duration: "3 weeks",
            desc: "Ophthalmology rotation provides training in clinical evaluation, minor procedures, and emergency eye care, with hands-on exposure to slit lamp exams and operative assistance.",
            weeks: [
                { week: "Week 1", text: "Clinics, slit lamp exams, refraction testing." },
                { week: "Week 2", text: "Minor procedures, OR assistance." },
                { week: "Week 3", text: "Post-operative follow-up, emergency eye care, patient counseling." }
            ]
        },
        {
            title: "Pediatric Surgery",
            duration: "3 weeks",
            desc: "Pediatric Surgery focuses on surgical care of children, congenital anomalies, and emergency pediatric procedures.",
            weeks: [
                { week: "Week 1", text: "Pediatric ward rounds, congenital anomaly evaluation." },
                { week: "Week 2", text: "OR: hernia repairs, appendectomy, congenital surgeries." },
                { week: "Week 3", text: "Post-operative care, NICU exposure, emergency pediatric cases." }
            ]
        },
        {
            title: "Surgical Oncology",
            duration: "3 weeks",
            desc: "Surgical Oncology emphasizes cancer surgery, tumor boards, and perioperative oncology care, combining operative skills with multidisciplinary patient management.",
            weeks: [
                { week: "Week 1", text: "Oncology ward rounds, tumor board participation, case discussions." },
                { week: "Week 2", text: "OR: mastectomy, colectomy, and other oncologic procedures." },
                { week: "Week 3", text: "Post-operative care, chemotherapy follow-up, patient counseling." }
            ]
        },
        {
            title: "Trauma Surgery",
            duration: "3 weeks",
            desc: "Trauma Surgery trains residents to manage emergency surgical interventions and critically ill trauma patients, focusing on rapid assessment and operative decision-making.",
            weeks: [
                { week: "Week 1", text: "ER trauma evaluation, resuscitation, imaging interpretation." },
                { week: "Week 2", text: "OR: emergency laparotomy, orthopedic trauma assistance." },
                { week: "Week 3", text: "Post-operative ICU care, wound management, follow-up care." }
            ]
        },
        {
            title: "Colorectal Surgery",
            duration: "3 weeks",
            desc: "Colorectal Surgery provides training in bowel, anorectal, and minimally invasive procedures, focusing on pre-op assessment, operative management, and post-op care.",
            weeks: [
                { week: "Week 1", text: "Clinics, bowel prep, colonoscopy observation." },
                { week: "Week 2", text: "OR: colectomy, hemorrhoidectomy, laparoscopic procedures." },
                { week: "Week 3", text: "Post-operative care, complication management, patient follow-up." }
            ]
        }
    ],
    medical: [
        {
            title: "Internal Medicine",
            duration: "2 weeks",
            desc: "Internal Medicine is the foundation of adult patient care, emphasizing diagnosis, medical management, and preventive care for complex conditions. Residents learn to interpret laboratory and imaging studies, perform procedures, and coordinate multidisciplinary care.",
            weeks: [
                { week: "Week 1", text: "Ward rounds, patient evaluation, lab and imaging review, formulation of management plans." },
                { week: "Week 2", text: "Hands-on procedures including IV lines, lumbar punctures, and outpatient follow-up clinics." }
            ]
        },
        {
            title: "Pediatrics",
            duration: "2 weeks",
            desc: "Pediatrics focuses on growth and development, preventive care, and management of pediatric illnesses. Trainees are exposed to ward care, outpatient follow-ups, and NICU experience.",
            weeks: [
                { week: "Week 1", text: "Ward rounds, growth and development assessment, immunizations, and inpatient management." },
                { week: "Week 2", text: "Outpatient clinics, NICU exposure, and pediatric procedures such as IV lines and minor interventions." }
            ]
        },
        {
            title: "Emergency Medicine",
            duration: "2 weeks",
            desc: "Emergency Medicine prepares residents to manage acute, life-threatening conditions across all age groups, including trauma, cardiac, and critical care emergencies.",
            weeks: [
                { week: "Week 1", text: "ER triage, trauma assessment, initial resuscitation, and critical patient evaluation." },
                { week: "Week 2", text: "Emergency procedures including airway management, central line insertion, and critically ill patient monitoring." }
            ]
        },
        {
            title: "Neurology",
            duration: "2 weeks",
            desc: "Neurology training covers neurological disorders, stroke care, seizure management, and neurocritical care. Residents gain experience in inpatient care, consults, and diagnostic interpretation.",
            weeks: [
                { week: "Week 1", text: "Ward rounds, neurological examinations, EMG and EEG interpretation." },
                { week: "Week 2", text: "Consults, stroke unit exposure, neuro emergencies, and outpatient follow-ups." }
            ]
        },
        {
            title: "Psychiatry",
            duration: "2 weeks",
            desc: "Psychiatry emphasizes mental health evaluation, inpatient and outpatient therapy, and pharmacological management. Trainees observe and participate in multidisciplinary mental healthcare.",
            weeks: [
                { week: "Week 1", text: "Inpatient evaluations, therapy observation, case discussions." },
                { week: "Week 2", text: "Outpatient clinics, psychotherapy sessions, and medication management." }
            ]
        },
        {
            title: "Dermatology",
            duration: "2 weeks",
            desc: "Dermatology focuses on skin, hair, and nail disorders, combining clinic-based evaluation, minor procedures, and follow-up care.",
            weeks: [
                { week: "Week 1", text: "Clinic exposure, skin biopsies, minor procedures." },
                { week: "Week 2", text: "Outpatient follow-ups, wound care management, and procedural observation." }
            ]
        },
        {
            title: "Family Medicine",
            duration: "2 weeks",
            desc: "Family Medicine emphasizes holistic care, preventive medicine, and management of chronic conditions across all age groups.",
            weeks: [
                { week: "Week 1", text: "Outpatient clinics, chronic disease follow-up, preventive care counseling." },
                { week: "Week 2", text: "Community health visits, home visit observation, and health education programs." }
            ]
        },
        {
            title: "Physical Medicine & Rehabilitation (PM&R)",
            duration: "2 weeks",
            desc: "PM&R focuses on restoring function and mobility for patients with neurological, musculoskeletal, or post-surgical conditions.",
            weeks: [
                { week: "Week 1", text: "Patient assessment, physiotherapy planning, and rehabilitation evaluation." },
                { week: "Week 2", text: "Hands-on rehab procedures, prosthetics and orthotics, and follow-ups." }
            ]
        },
        {
            title: "Infectious Disease (after IM)",
            duration: "2 weeks",
            desc: "Infectious Disease emphasizes infection management, antibiotic stewardship, and prevention strategies.",
            weeks: [
                { week: "Week 1", text: "Ward rounds, culture interpretation, antimicrobial planning." },
                { week: "Week 2", text: "Case discussions, outpatient follow-up, and infection control protocols." }
            ]
        },
        {
            title: "Endocrinology (after IM)",
            duration: "2 weeks",
            desc: "Endocrinology covers diabetes, thyroid, adrenal, and metabolic disorders, combining inpatient and outpatient care with procedural exposure.",
            weeks: [
                { week: "Week 1", text: "Ward rounds, evaluation of endocrine disorders, insulin and thyroid management." },
                { week: "Week 2", text: "Outpatient clinics, endocrine procedures, and patient counseling." }
            ]
        },
        {
            title: "Nephrology (after IM)",
            duration: "2 weeks",
            desc: "Nephrology focuses on kidney diseases, dialysis, and transplant care, integrating procedural training with patient management.",
            weeks: [
                { week: "Week 1", text: "Dialysis rounds, ward management, and fluid/electrolyte correction." },
                { week: "Week 2", text: "Renal biopsy observation, transplant follow-up, and patient monitoring." }
            ]
        },
        {
            title: "Pulmonology (after IM)",
            duration: "2 weeks",
            desc: "Pulmonology focuses on lung diseases, ICU care, bronchoscopy, and pulmonary function testing.",
            weeks: [
                { week: "Week 1", text: "Pulmonary function testing, ward rounds, ICU exposure." },
                { week: "Week 2", text: "Bronchoscopy, outpatient consultations, and management of respiratory emergencies." }
            ]
        },
        {
            title: "Gastroenterology (after IM)",
            duration: "2 weeks",
            desc: "Gastroenterology trains residents in liver and digestive disorders, endoscopic procedures, and post-procedure care.",
            weeks: [
                { week: "Week 1", text: "Clinics, liver disease assessment, ward rounds." },
                { week: "Week 2", text: "Endoscopic procedures including ERCP and post-procedure patient care." }
            ]
        },
        {
            title: "Rheumatology (after IM)",
            duration: "2 weeks",
            desc: "Rheumatology focuses on joint and autoimmune disorders, integrating ward care, lab interpretation, and outpatient procedures.",
            weeks: [
                { week: "Week 1", text: "Ward rounds, joint exams, labs and imaging interpretation." },
                { week: "Week 2", text: "Outpatient clinics, joint injections, and patient counseling." }
            ]
        }
    ],
    interventional: [
        {
            title: "Interventional Cardiology",
            duration: "3 weeks (after IM + Cardiology)",
            desc: "Trains residents in diagnostic and therapeutic cardiac procedures, including angiography and PCI.",
            weeks: [
                { week: "Week 1", text: "Diagnostic coronary angiography and patient evaluation." },
                { week: "Week 2", text: "Percutaneous coronary interventions, stent placements, and intra-procedural decision-making." },
                { week: "Week 3", text: "Post-procedure monitoring, complication management, and follow-up care." }
            ]
        },
        {
            title: "Cardiac Electrophysiology",
            duration: "3 weeks (after IM + Cardiology)",
            desc: "Focuses on arrhythmia management, ablation, and pacemaker/ICD implantation.",
            weeks: [
                { week: "Week 1", text: "ECG and EP study review, arrhythmia interpretation." },
                { week: "Week 2", text: "Ablation procedures and electrophysiology interventions." },
                { week: "Week 3", text: "Pacemaker/ICD implantation, post-procedural care, and monitoring." }
            ]
        },
        {
            title: "Structural Heart Intervention (TAVR)",
            duration: "3 weeks (after IM + Cardiology)",
            desc: "Covers transcatheter valve therapies and minimally invasive cardiac procedures.",
            weeks: [
                { week: "Week 1", text: "Imaging review, pre-op planning." },
                { week: "Week 2", text: "TAVR procedure observation and intraoperative learning." },
                { week: "Week 3", text: "Post-op ICU care, hemodynamic monitoring, and follow-up." }
            ]
        },
        {
            title: "Interventional Radiology",
            duration: "3 weeks (after Gen Surgery / Radiology)",
            desc: "Trains residents in imaging-guided procedures including biopsies, embolizations, and vascular interventions.",
            weeks: [
                { week: "Week 1", text: "Imaging-guided biopsies, case planning." },
                { week: "Week 2", text: "Vascular interventions, embolizations." },
                { week: "Week 3", text: "Post-procedure monitoring, emergencies, and follow-up." }
            ]
        },
        {
            title: "Neurointerventional / Endovascular",
            duration: "3 weeks (after Neurosurgery or Neurology)",
            desc: "Trains residents in catheter-based procedures for cerebrovascular disorders, including thrombectomy, coiling, and endovascular interventions.",
            weeks: [
                { week: "Week 1", text: "Case discussions, imaging interpretation, and procedural planning." },
                { week: "Week 2", text: "Catheter-based procedures including thrombectomy and aneurysm coiling." },
                { week: "Week 3", text: "Post-procedure ICU care, complication management, and follow-up assessments." }
            ]
        },
        {
            title: "Interventional Pulmonology",
            duration: "3 weeks (after IM / Pulmonology)",
            desc: "Focuses on advanced bronchoscopic procedures and therapeutic interventions for lung diseases.",
            weeks: [
                { week: "Week 1", text: "Bronchoscopy observation and patient evaluation." },
                { week: "Week 2", text: "Therapeutic bronchoscopic procedures such as stent placement and biopsies." },
                { week: "Week 3", text: "Post-procedure care, ICU exposure, and follow-up management." }
            ]
        },
        {
            title: "Advanced GI Endoscopy",
            duration: "3 weeks (after IM / Gastroenterology)",
            desc: "Trains in diagnostic and therapeutic gastrointestinal endoscopic procedures, including ERCP and polypectomy.",
            weeks: [
                { week: "Week 1", text: "Diagnostic endoscopy and patient assessment." },
                { week: "Week 2", text: "Therapeutic endoscopy including ERCP and polypectomy." },
                { week: "Week 3", text: "Post-procedure monitoring, complication management, and follow-ups." }
            ]
        },
        {
            title: "Pain Medicine (Interventional)",
            duration: "3 weeks (after PM&R / Anesthesia)",
            desc: "Covers nerve blocks, spinal injections, and interventional pain management techniques.",
            weeks: [
                { week: "Week 1", text: "Patient evaluation, pain assessment, and imaging review." },
                { week: "Week 2", text: "Nerve block procedures, epidural injections, and interventional techniques." },
                { week: "Week 3", text: "Post-procedure follow-up, complication management, and outcome assessment." }
            ]
        },
        {
            title: "Peripheral Vascular Intervention",
            duration: "3 weeks (after Vascular Surgery / Radiology)",
            desc: "Focuses on endovascular interventions for peripheral vascular diseases, including stenting and angioplasty.",
            weeks: [
                { week: "Week 1", text: "Imaging review and diagnostic catheterization." },
                { week: "Week 2", text: "Endovascular procedures including angioplasty and stent placement." },
                { week: "Week 3", text: "Post-procedure care, monitoring, and emergency management." }
            ]
        },
        {
            title: "Dialysis Access Intervention",
            duration: "2 weeks (after IM / Nephrology)",
            desc: "Trains in creation and maintenance of hemodialysis access, including line insertion and monitoring.",
            weeks: [
                { week: "Week 1", text: "Pre-procedure planning, line insertion, and patient preparation." },
                { week: "Week 2", text: "Post-procedure follow-up, complication management, and troubleshooting access issues." }
            ]
        },
        {
            title: "TAVR / Transcatheter Valve Therapy",
            duration: "3 weeks (after IM + Cardiology)",
            desc: "Provides hands-on exposure to minimally invasive valve replacement procedures.",
            weeks: [
                { week: "Week 1", text: "Pre-op evaluation, imaging review, and case planning." },
                { week: "Week 2", text: "Observation of TAVR procedures, intraoperative learning." },
                { week: "Week 3", text: "Post-operative ICU care, hemodynamic monitoring, and follow-up." }
            ]
        },
        {
            title: "Fetal Intervention Procedures",
            duration: "3 weeks (after OB/GYN)",
            desc: "Covers minimally invasive fetal procedures and prenatal surgical interventions.",
            weeks: [
                { week: "Week 1", text: "Imaging review, patient evaluation, and case discussions." },
                { week: "Week 2", text: "Hands-on observation of minimally invasive fetal procedures." },
                { week: "Week 3", text: "Post-procedure follow-up, maternal and fetal monitoring." }
            ]
        }
    ],
    radiology: [
        {
            title: "Diagnostic Radiology",
            duration: "2 weeks",
            desc: "Covers X-ray, CT, MRI, and ultrasound interpretation, along with participation in case discussions.",
            weeks: [
                { week: "Week 1", text: "Ward rounds, X-ray, CT, and MRI interpretation." },
                { week: "Week 2", text: "Outpatient imaging review, case discussions, and reporting." }
            ]
        },
        {
            title: "Interventional Radiology",
            duration: "3 weeks (after Gen Surgery / DR)",
            desc: "Trains in image-guided procedures including biopsies, embolizations, and vascular interventions.",
            weeks: [
                { week: "Week 1", text: "Imaging-guided biopsies, planning, and pre-procedure evaluation." },
                { week: "Week 2", text: "Vascular interventions and embolizations." },
                { week: "Week 3", text: "Post-procedure monitoring, emergencies, and complication management." }
            ]
        },
        {
            title: "Neuroradiology",
            duration: "3 weeks (after DR)",
            desc: "Focuses on neurological imaging and interventional neuro procedures.",
            weeks: [
                { week: "Week 1", text: "Neuroimaging interpretation, MRI and CT review." },
                { week: "Week 2", text: "Case planning, consultation, and imaging-guided interventions." },
                { week: "Week 3", text: "Observation of interventional neuro procedures and post-procedure follow-up." }
            ]
        },
        {
            title: "Musculoskeletal Radiology",
            duration: "2 weeks (after DR)",
            desc: "Covers joint imaging, trauma radiology, and ultrasound-guided interventions.",
            weeks: [
                { week: "Week 1", text: "MRI and CT review, joint imaging interpretation." },
                { week: "Week 2", text: "Ultrasound-guided procedures, consultations, and follow-ups." }
            ]
        },
        {
            title: "Pediatric Radiology",
            duration: "2 weeks (after DR)",
            desc: "Focuses on imaging and procedures in pediatric patients, including NICU exposure.",
            weeks: [
                { week: "Week 1", text: "Pediatric imaging review, ward rounds." },
                { week: "Week 2", text: "Procedures, case discussions, and consultations." }
            ]
        },
        {
            title: "Breast Imaging",
            duration: "2 weeks (after DR)",
            desc: "Trains in mammography, ultrasound, and image-guided biopsies.",
            weeks: [
                { week: "Week 1", text: "Mammography and ultrasound review." },
                { week: "Week 2", text: "Biopsy guidance, reporting, and follow-up care." }
            ]
        },
        {
            title: "Cardiothoracic Radiology",
            duration: "2 weeks (after DR)",
            desc: "Covers chest imaging, CT interpretation, and procedural observation.",
            weeks: [
                { week: "Week 1", text: "Chest X-ray, CT review." },
                { week: "Week 2", text: "Case discussions, intervention observation, and reporting." }
            ]
        },
        {
            title: "Abdominal Radiology",
            duration: "2 weeks (after DR)",
            desc: "Focuses on CT, MRI, and ultrasound interpretation for abdominal pathologies.",
            weeks: [
                { week: "Week 1", text: "Imaging review, ward rounds." },
                { week: "Week 2", text: "Ultrasound-guided procedures, case discussions, and reporting." }
            ]
        },
        {
            title: "Nuclear Medicine",
            duration: "2 weeks",
            desc: "Covers radionuclide imaging, PET/CT scans, and reporting.",
            weeks: [
                { week: "Week 1", text: "PET/CT and radionuclide imaging interpretation." },
                { week: "Week 2", text: "Case discussion, reporting, and correlation with clinical findings." }
            ]
        },
        {
            title: "Molecular Imaging",
            duration: "2 weeks (after DR)",
            desc: "Focuses on advanced imaging for functional and molecular studies.",
            weeks: [
                { week: "Week 1", text: "Imaging review and lab correlation." },
                { week: "Week 2", text: "Reporting, case discussions, and research observation." }
            ]
        },
        {
            title: "Emergency Radiology",
            duration: "2 weeks (after DR)",
            desc: "Trains in acute imaging interpretation and on-call reporting for trauma and emergencies.",
            weeks: [
                { week: "Week 1", text: "Trauma imaging and acute findings review." },
                { week: "Week 2", text: "On-call reporting and urgent consults." }
            ]
        }
    ],
    nursing: [
        {
            title: "ICU Nurse",
            duration: "2.5 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for critical care environments.",
            weeks: [
                { week: "Week 1", text: "ICU patient assessment, vitals, ventilator basics." },
                { week: "Week 2", text: "Medication administration, emergency scenarios." },
                { week: "Week 3", text: "Complex case management, advanced ICU procedures." }
            ]
        },
        {
            title: "Emergency Nurse",
            duration: "2.5 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for emergency care environments.",
            weeks: [
                { week: "Week 1", text: "Triage, trauma assessment." },
                { week: "Week 2", text: "Emergency procedures and patient stabilization." },
                { week: "Week 3", text: "Critical care follow-up and case discussions." }
            ]
        },
        {
            title: "OR Nurse",
            duration: "2.5 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for perioperative care environments.",
            weeks: [
                { week: "Week 1", text: "Sterile prep, assisting minor procedures." },
                { week: "Week 2", text: "Major surgeries, instrument handling." },
                { week: "Week 3", text: "Post-op care, OR management, and workflow coordination." }
            ]
        },
        {
            title: "Cath Lab Nurse",
            duration: "2 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for catheterization lab environments.",
            weeks: [
                { week: "Week 1", text: "Cath lab preparation, monitoring vitals." },
                { week: "Week 2", text: "Assisting procedures and post-procedure care." }
            ]
        },
        {
            title: "NICU Nurse",
            duration: "2.5 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for neonatal intensive care environments.",
            weeks: [
                { week: "Week 1", text: "Neonatal assessment, feeding, monitoring." },
                { week: "Week 2", text: "Ventilator/CPAP management, IV lines." },
                { week: "Week 3", text: "Emergency neonatal care and procedures." }
            ]
        },
        {
            title: "Pediatric Nurse",
            duration: "2 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for pediatric care environments.",
            weeks: [
                { week: "Week 1", text: "Ward rounds, medications, growth monitoring." },
                { week: "Week 2", text: "Procedures, parent counseling, emergency management." }
            ]
        },
        {
            title: "Oncology Nurse",
            duration: "2.5 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for oncology care environments.",
            weeks: [
                { week: "Week 1", text: "Chemotherapy preparation, patient monitoring." },
                { week: "Week 2", text: "Ward rounds, symptom management." },
                { week: "Week 3", text: "Outpatient follow-ups, palliative care coordination." }
            ]
        },
        {
            title: "Psychiatric Nurse",
            duration: "2 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for psychiatric care environments.",
            weeks: [
                { week: "Week 1", text: "Ward rounds, counseling observation." },
                { week: "Week 2", text: "Medication administration, therapy sessions." }
            ]
        },
        {
            title: "Dialysis Nurse",
            duration: "2 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for dialysis environments.",
            weeks: [
                { week: "Week 1", text: "Patient preparation, machine setup." },
                { week: "Week 2", text: "Dialysis monitoring, complication management." }
            ]
        },
        {
            title: "Labor & Delivery Nurse",
            duration: "2.5 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for labor and delivery environments.",
            weeks: [
                { week: "Week 1", text: "Antenatal assessment, patient monitoring." },
                { week: "Week 2", text: "Assisting deliveries, emergency procedures." },
                { week: "Week 3", text: "Postpartum care, neonatal assessment." }
            ]
        },
        {
            title: "Nurse Practitioner (NP)",
            duration: "2 weeks (after RN)",
            desc: "HIH Nursing Specialty designed to prepare Nurse Practitioners.",
            weeks: [
                { week: "Week 1", text: "Patient evaluation, diagnostic planning." },
                { week: "Week 2", text: "Follow-ups, advanced procedures, and care coordination." }
            ]
        },
        {
            title: "Nurse Anesthetist (CRNA)",
            duration: "2.5 weeks (after RN)",
            desc: "HIH Nursing Specialty designed to prepare Nurse Anesthetists.",
            weeks: [
                { week: "Week 1", text: "Airway management, anesthesia setup." },
                { week: "Week 2", text: "Assisting surgeries, intraoperative monitoring." },
                { week: "Week 3", text: "Advanced anesthesia procedures, post-op care." }
            ]
        },
        {
            title: "Palliative Care Nurse",
            duration: "2 weeks",
            desc: "HIH Nursing Specialty designed to prepare nurses for palliative care environments.",
            weeks: [
                { week: "Week 1", text: "Patient evaluation, pain management." },
                { week: "Week 2", text: "Symptom management, counseling, and end-of-life care support." }
            ]
        }
    ]
};

function loadCategory(category) {
    const grid = document.getElementById('programs-grid');
    const buttons = document.querySelectorAll('.nav-btn');

    // Update Buttons
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if(btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

    // Clear Grid
    grid.innerHTML = '';

    // Load Data
    const data = programsData[category];
    if(data) {
        data.forEach(item => {
            // Create Card
            const card = document.createElement('div');
            card.className = 'card';

            const header = document.createElement('div');
            header.className = 'card-header';
            
            const badge = document.createElement('span');
            badge.className = 'duration-badge';
            badge.innerHTML = `<i class="fa-regular fa-clock"></i> ${item.duration}`;

            const title = document.createElement('h3');
            title.textContent = item.title;

            header.appendChild(badge);
            header.appendChild(title);

            const desc = document.createElement('p');
            desc.className = 'card-desc';
            desc.textContent = item.desc;

            const schedule = document.createElement('div');
            schedule.className = 'schedule';

            item.weeks.forEach(w => {
                const weekItem = document.createElement('div');
                weekItem.className = 'week-item';
                weekItem.innerHTML = `<div class="week-label">${w.week}:</div><div>${w.text}</div>`;
                schedule.appendChild(weekItem);
            });

            card.appendChild(header);
            card.appendChild(desc);
            card.appendChild(schedule);

            grid.appendChild(card);
        });
    }
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    loadCategory('surgical');
});