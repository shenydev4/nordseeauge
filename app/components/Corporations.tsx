import Facebook from "@/app/components/icons/Facebook";
import Instagram from "@/app/components/icons/Instagram";
import ExternalLink from '@/app/components/typo/ExternalLink'

export interface CorporationsProps {
  className?:string,
  headline:string,
  introText:string,
  caption:string,
  corporations: {
    organization:string,
    website:string,
    socials?: {
      platform:string,
      name:string,
      link:string,
    }[];
  }[];
}

export default function Corporations({
  className,
  headline,
  introText,
  caption,
  corporations,
}:CorporationsProps) {
  return (
    <div className={className}>

      <h2 className="mb-10">
        {headline}
        </h2>
      <p className="mb-4">
        {introText}
      </p>
      <p className="caption">
        {caption}
      </p>

      <div className="mt-8 space-y-10">
        {corporations.map((item, index) => (
          <div key={index} className="border-l-2 border-yellow-200 md:pl-6 pl-4 md:ml-8 flex flex-col gap-2">
            <p className="p-large font-bold">{item.organization}</p>
            <ExternalLink href={`https://${item.website}`} className="after:!w-0 md:!text-[22px] !text-[18px] underline underline-offset-2">
              {item.website}
            </ExternalLink>
            {item.socials && (
              <div className="flex md:gap-8 gap-2 md:flex-row flex-col">
                {item.socials.map((social, idx) => (
                  <ExternalLink key={idx} href={social.link} className="group flex items-center md:gap-4 gap-3 after:!w-0">
                    <span className="block md:w-6 w-5 md:h-6 h-5 mt-1.5">
                      {social.platform == 'Instagram' ? (
                        <Instagram />
                      ):(
                        <Facebook />
                      )}
                    </span>
                    <p>{social.name}</p>
                  </ExternalLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  )
}
