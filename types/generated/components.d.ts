import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsContentAboutUsContent extends Struct.ComponentSchema {
  collectionName: 'components_about_us_content_about_us_contents';
  info: {
    displayName: 'About Us Content';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    introduction: Schema.Attribute.Text;
    signature: Schema.Attribute.String;
  };
}

export interface BrandInfoBrandInfo extends Struct.ComponentSchema {
  collectionName: 'components_brand_info_brand_infos';
  info: {
    displayName: 'brandInfo';
  };
  attributes: {
    brandSlogan: Schema.Attribute.Component<'brand-slogan.brand-slogan', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BrandSloganBrandSlogan extends Struct.ComponentSchema {
  collectionName: 'components_brand_slogan_brand_slogans';
  info: {
    displayName: 'brandSlogan';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface ContactInfoContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_info_contact_infos';
  info: {
    displayName: 'contactInfo';
  };
  attributes: {
    email: Schema.Attribute.Email;
    phones: Schema.Attribute.JSON;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Th\u00F4ng tin li\u00EAn h\u1EC7'>;
    website: Schema.Attribute.String;
    websiteDisplay: Schema.Attribute.String;
  };
}

export interface ContactSectionsContactSections extends Struct.ComponentSchema {
  collectionName: 'components_contact_sections_contact_sections';
  info: {
    displayName: 'contactSections';
  };
  attributes: {
    description: Schema.Attribute.Text;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    position: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface DescriptionDescription extends Struct.ComponentSchema {
  collectionName: 'components_description_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    value: Schema.Attribute.Text;
  };
}

export interface FooterContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_footer_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    email: Schema.Attribute.Component<'footer.email', true>;
    mailIcon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    phone: Schema.Attribute.Component<'footer.phone', true>;
    phoneIcon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    website: Schema.Attribute.Component<'footer.website', true>;
    websiteIcon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface FooterEmail extends Struct.ComponentSchema {
  collectionName: 'components_footer_emails';
  info: {
    displayName: 'email';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterItem extends Struct.ComponentSchema {
  collectionName: 'components_footer_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    position: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<1>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterOfficeLocation extends Struct.ComponentSchema {
  collectionName: 'components_footer_office_locations';
  info: {
    displayName: 'office-location';
  };
  attributes: {
    address: Schema.Attribute.String & Schema.Attribute.Required;
    isMainOffice: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    officeName: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<1>;
  };
}

export interface FooterPhone extends Struct.ComponentSchema {
  collectionName: 'components_footer_phones';
  info: {
    displayName: 'phone';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSocialMediaLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_media_links';
  info: {
    displayName: 'social-media-link';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    position: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<1>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterWebsite extends Struct.ComponentSchema {
  collectionName: 'components_footer_websites';
  info: {
    displayName: 'website';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GoogleMapsGoogleMaps extends Struct.ComponentSchema {
  collectionName: 'components_google_maps_google_maps';
  info: {
    displayName: 'googleMaps';
  };
  attributes: {
    embedUrl: Schema.Attribute.Text;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'T\u00ECm ki\u1EBFm ch\u00FAng t\u00F4i tr\u00EAn Google Map'>;
  };
}

export interface HeroVideoHeroVideo extends Struct.ComponentSchema {
  collectionName: 'components_hero_video_hero_videos';
  info: {
    displayName: 'Hero Video';
  };
  attributes: {
    desktopBanner: Schema.Attribute.Media<'images'>;
    desktopVideo: Schema.Attribute.Media<'videos'>;
    mobileBanner: Schema.Attribute.Media<'images'>;
    mobileVideo: Schema.Attribute.Media<'videos'>;
  };
}

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface OfficesOffices extends Struct.ComponentSchema {
  collectionName: 'components_offices_offices';
  info: {
    displayName: 'offices';
  };
  attributes: {
    address: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'T\u1EA7ng 7 t\u00F2a nh\u00E0 DEYES, s\u1ED1 371 Nguy\u1EC5n Ki\u1EC7m, Ph\u01B0\u1EDDng H\u1EA1nh Th\u00F4ng, TP. H\u1ED3 Ch\u00ED Minh'>;
    position: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<1>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Tr\u1EE5 s\u1EDF ch\u00EDnh t\u1EA1i TP. H\u1ED3 Ch\u00ED Minh'>;
  };
}

export interface PartnerItem extends Struct.ComponentSchema {
  collectionName: 'components_partner_items';
  info: {
    displayName: 'item';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    position: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<1>;
  };
}

export interface PartnerPartner extends Struct.ComponentSchema {
  collectionName: 'components_partner_partners';
  info: {
    displayName: 'Partner';
  };
  attributes: {
    partner_row: Schema.Attribute.Component<'partner.partner-row', true>;
  };
}

export interface PartnerPartnerRow extends Struct.ComponentSchema {
  collectionName: 'components_partner_partner_rows';
  info: {
    displayName: 'Partner row';
  };
  attributes: {
    partners: Schema.Attribute.Component<'partner.item', true>;
    position: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<1>;
  };
}

export interface ProjectItemProjectItem extends Struct.ComponentSchema {
  collectionName: 'components_project_item_project_items';
  info: {
    displayName: 'project-item';
  };
  attributes: {
    position: Schema.Attribute.Integer;
    project: Schema.Attribute.Relation<'oneToOne', 'api::project.project'>;
  };
}

export interface ProjectsProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    projectItem: Schema.Attribute.Component<'project-item.project-item', false>;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface ServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_service_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    iconActive: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    position: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<1>;
    slogan: Schema.Attribute.Component<'shared.slogan', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedBrandSlogan extends Struct.ComponentSchema {
  collectionName: 'components_shared_brand_slogans';
  info: {
    displayName: 'brandSlogan';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPartnerRow extends Struct.ComponentSchema {
  collectionName: 'components_shared_partner_rows';
  info: {
    displayName: 'Partner row';
  };
  attributes: {
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    position: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<1>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSlogan extends Struct.ComponentSchema {
  collectionName: 'components_shared_slogans';
  info: {
    displayName: 'slogan';
  };
  attributes: {
    description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface VisionVision extends Struct.ComponentSchema {
  collectionName: 'components_vision_visions';
  info: {
    displayName: 'Vision';
  };
  attributes: {
    contents: Schema.Attribute.Component<'description.description', true>;
    title: Schema.Attribute.String;
  };
}

export interface WorkflowWorkflow extends Struct.ComponentSchema {
  collectionName: 'components_workflow_workflows';
  info: {
    displayName: 'Workflow';
  };
  attributes: {
    images: Schema.Attribute.Component<'image.image', true>;
    slogan: Schema.Attribute.Text;
  };
}

export interface WorkingHoursWorkingHours extends Struct.ComponentSchema {
  collectionName: 'components_working_hours_working_hours';
  info: {
    displayName: 'workingHours';
  };
  attributes: {
    days: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Th\u1EE9 Hai - Th\u1EE9 S\u00E1u'>;
    hours: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'09:00 - 17:30'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Gi\u1EDD l\u00E0m vi\u1EC7c'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us-content.about-us-content': AboutUsContentAboutUsContent;
      'brand-info.brand-info': BrandInfoBrandInfo;
      'brand-slogan.brand-slogan': BrandSloganBrandSlogan;
      'contact-info.contact-info': ContactInfoContactInfo;
      'contact-sections.contact-sections': ContactSectionsContactSections;
      'description.description': DescriptionDescription;
      'footer.contact-info': FooterContactInfo;
      'footer.email': FooterEmail;
      'footer.item': FooterItem;
      'footer.office-location': FooterOfficeLocation;
      'footer.phone': FooterPhone;
      'footer.social-media-link': FooterSocialMediaLink;
      'footer.website': FooterWebsite;
      'google-maps.google-maps': GoogleMapsGoogleMaps;
      'hero-video.hero-video': HeroVideoHeroVideo;
      'image.image': ImageImage;
      'offices.offices': OfficesOffices;
      'partner.item': PartnerItem;
      'partner.partner': PartnerPartner;
      'partner.partner-row': PartnerPartnerRow;
      'project-item.project-item': ProjectItemProjectItem;
      'projects.projects': ProjectsProjects;
      'seo.seo': SeoSeo;
      'service.item': ServiceItem;
      'shared.brand-slogan': SharedBrandSlogan;
      'shared.media': SharedMedia;
      'shared.partner-row': SharedPartnerRow;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.slogan': SharedSlogan;
      'vision.vision': VisionVision;
      'workflow.workflow': WorkflowWorkflow;
      'working-hours.working-hours': WorkingHoursWorkingHours;
    }
  }
}
