import InternCardCertificate from './cardInternCertificate'
import CardSeminarCertificate from './cardSeminarCertificate'
import CardSkillCertificate from './cardSkillCertificate'
import InternCertificate from './internCertificate'
import SeminarCertificate from './seminarCertificate'
import SkillCertificate from './skillCertificate'

export default function CertificateBox2 () {
    return (
        <>
            <div className="flex flex-col gap-6 py-4 border-t border-dashed border-primary">
                {/* skill */}
                <SkillCertificate />
                {/* card skill */}
                <CardSkillCertificate />
                {/* Intern */}
                <InternCertificate />
                {/* card intern */}
                <InternCardCertificate />
                {/* seminar */}
                <SeminarCertificate />
                {/* card seminar */}
                <CardSeminarCertificate />
            </div>
        </>
    )
}