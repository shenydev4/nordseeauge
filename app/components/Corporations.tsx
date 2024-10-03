import Facebook from "@/app/components/icons/Facebook";
import Instagram from "@/app/components/icons/Instagram";

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
          <div key={index} className="border-l-2 border-yellow-200 pl-6 md:ml-8 ml-2 flex flex-col gap-2">
            <p className="p-large font-bold">{item.organization}</p>
            <a className="after:!w-0" href={`https://${item.website}`} target="_blank">{item.website}</a>
            {item.socials && (
              <div className="flex md:gap-8 gap-2 md:flex-row flex-col">
                {item.socials.map((social, idx) => (
                  <a key={idx} className="group flex items-center gap-4 after:!w-0" href={social.link} target="_blank">
                    <span className="block w-6 h-6 mt-1.5">
                      {social.platform == 'Instagram' ? (
                        <Instagram />
                      ):(
                        <Facebook />
                      )}
                    </span>
                    <p>{social.name}</p>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
    </div>
  )
}
