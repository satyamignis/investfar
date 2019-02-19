import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { CompaniesComponent } from './companies/companies.component';
import { LoginComponent } from './login/login.component';
import { LocalInvestorConsultantComponent } from './local-investor-consultant/local-investor-consultant.component';
import { HomeImprovementNetworkComponent } from './home-improvement-network/home-improvement-network.component';
import { SeminarsEventsNvestorsClubComponent } from './seminars-events-nvestors-club/seminars-events-nvestors-club.component';
import { ValuationComponent } from './valuation/valuation.component';
import { RealEstateLegalFormsComponent } from './real-estate-legal-forms/real-estate-legal-forms.component';
import { PrivacyPolicyTermsComponent } from './privacy-policy-terms/privacy-policy-terms.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContractorRegistrationComponent } from './contractor-registration/contractor-registration.component';
import { OwnerFinancedNoBanksNeededComponent } from './owner-financed-no-banks-needed/owner-financed-no-banks-needed.component';
import { CompaniesRegistrationComponent } from './companies-registration/companies-registration.component';
import { RealEstateAgentRegistrationComponent } from './real-estate-agent-registration/real-estate-agent-registration.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { MyFavoritesComponent } from './my-favorites/my-favorites.component';
import { MyPurchaseHistoryComponent } from './my-purchase-history/my-purchase-history.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { MyOfferedServicesComponent } from './my-offered-services/my-offered-services.component';
import { ManageServicesComponent } from './manage-services/manage-services.component';





export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "contractors", component: ContractorsComponent },
    { path: "companies", component: CompaniesComponent },
    { path: "pricing", component: PricingComponent },
    { path: "login", component: LoginComponent },
    { path: "local-investor-consultant", component: LocalInvestorConsultantComponent },
    { path: "home-improvement-network", component: HomeImprovementNetworkComponent },
    { path: "seminars-events-nvestors-club", component: SeminarsEventsNvestorsClubComponent },
    { path: "valuation", component: ValuationComponent },
    { path: "real-estate-legal-forms", component: RealEstateLegalFormsComponent },
    { path: "privacy-policy-terms", component: PrivacyPolicyTermsComponent },
    { path: "aboutus", component: AboutusComponent },
    { path: "careers", component: CareersComponent },
    { path: "contact-us", component: ContactUsComponent },
    { path: "contractor-registration", component: ContractorRegistrationComponent },
    { path: "owner-financed-no-banks-needed", component: OwnerFinancedNoBanksNeededComponent },
    { path: "companies-registration", component: CompaniesRegistrationComponent },
    { path: "real-estate-agent-registration", component: RealEstateAgentRegistrationComponent },
    { path: "my-properties", component: MyPropertiesComponent },
    { path: "my-favorites", component: MyFavoritesComponent },
    { path: "my-purchase-history", component: MyPurchaseHistoryComponent },
    { path: "change-password", component: ChangePasswordComponent },
    { path: "edit-profile", component: EditProfileComponent },
    { path: "add-service", component: AddServiceComponent },
    { path: "my-offered-services", component: MyOfferedServicesComponent },
    { path: "manage-services", component: ManageServicesComponent }
];

export const AppComponents: any = [
    HomeComponent,
    PricingComponent,
    ContractorsComponent,
    CompaniesComponent,
    LoginComponent,
    LocalInvestorConsultantComponent,
    HomeImprovementNetworkComponent,
    SeminarsEventsNvestorsClubComponent,
    ValuationComponent,
    RealEstateLegalFormsComponent,
    PrivacyPolicyTermsComponent,
    AboutusComponent,
    CareersComponent,
    ContactUsComponent,
    OwnerFinancedNoBanksNeededComponent,
    CompaniesRegistrationComponent,
    RealEstateAgentRegistrationComponent,
    MyPropertiesComponent,
    MyFavoritesComponent,
    MyPurchaseHistoryComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    AddServiceComponent,
    MyOfferedServicesComponent,
    ManageServicesComponent
];