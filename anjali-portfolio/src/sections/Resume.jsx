import { useEffect, useState } from 'react'
import { Download, Eye } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import NeonButton from '../components/NeonButton'
const URL_ = '/assets/resume.pdf'
export default function Resume() {
  const [exists, setExists] = useState(null)
  useEffect(() => {
    fetch(URL_, { method: 'HEAD' }).then((r) => setExists(r.ok && (r.headers.get('content-type') || '').includes('pdf'))).catch(() => setExists(false))
  }, [])
  return (
    <section id="resume" aria-labelledby="resume-h" className="bg-navy/60 px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading id="resume-h">RESUME ✦</SectionHeading>
        {exists === false ? (
          <p className="glass mx-auto max-w-lg p-5 text-sm text-muted">My resume isn't uploaded to this site yet. Add a PDF at <code className="text-cyan">public/assets/resume.pdf</code>, or email me at <a className="text-cyan underline" href="mailto:anjaliyadav40@gmail.com">anjaliyadav40@gmail.com</a>.</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-3">
            <NeonButton href={URL_} download="Anjali_Yadav_Resume.pdf" icon={<Download size={16} aria-hidden="true" />}>Download Resume</NeonButton>
            <NeonButton href={URL_} external variant="secondary" icon={<Eye size={16} aria-hidden="true" />}>View Resume</NeonButton>
          </div>
        )}
      </div>
    </section>
  )
}
