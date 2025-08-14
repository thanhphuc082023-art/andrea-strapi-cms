import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.contact-info': FooterContactInfo;
      'footer.email': FooterEmail;
      'footer.item': FooterItem;
      'footer.office-location': FooterOfficeLocation;
      'footer.phone': FooterPhone;
      'footer.social-media-link': FooterSocialMediaLink;
      'footer.website': FooterWebsite;
      'partner.item': PartnerItem;
      'partner.partner': PartnerPartner;
      'partner.partner-row': PartnerPartnerRow;
      'project-item.project-item': ProjectItemProjectItem;
      'projects.projects': ProjectsProjects;
      'service.item': ServiceItem;
      'shared.brand-slogan': SharedBrandSlogan;
      'shared.media': SharedMedia;
      'shared.partner-row': SharedPartnerRow;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.slogan': SharedSlogan;
    }
  }
}
