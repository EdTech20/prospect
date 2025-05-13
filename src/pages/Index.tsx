
import React from 'react';
import ToolBox from '@/components/ToolBox';
import ActionButton from '@/components/ActionButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10">
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold text-fuchsia-500 mb-2">Prospecting stack</h1>
        <div className="flex items-center justify-center gap-1 mb-8">
          <span className="text-white">The</span>
          <span className="text-fuchsia-500 underline">Signal</span>
        </div>
      </div>

      {/* Best tools for section */}
      <div className="flex gap-2 mb-10">
        <span className="text-white text-sm">Best tools for:</span>
        <div className="flex gap-2">
          <span className="bg-black border border-white text-white px-3 py-0.5 rounded-full text-xs">CRM</span>
          <span className="bg-fuchsia-500 text-white px-3 py-0.5 rounded-full text-xs">Prospecting</span>
          <span className="bg-black border border-white text-white px-3 py-0.5 rounded-full text-xs">Finance</span>
          <span className="bg-black border border-white text-white px-3 py-0.5 rounded-full text-xs">HR/Payroll</span>
        </div>
      </div>

      {/* Main mind map layout */}
      <div className="relative w-full max-w-5xl mx-auto px-4">
        {/* Top row */}
        <div className="flex justify-center gap-4 mb-4">
          <ToolBox 
            title="LI Automation" 
            items={["CDLP", "Octopus", "LinkedHelper"]} 
            color="bg-purple-400" 
            size="small"
          />
          <ToolBox 
            title="Job Changes" 
            items={["Zoominfo", "Slintel"]} 
            color="bg-purple-400" 
            size="small"
          />
        </div>

        {/* Second row */}
        <div className="flex justify-center gap-3 mb-4">
          <ToolBox 
            title="Video" 
            items={["Vidyard", "BombBomb"]} 
            color="bg-purple-300" 
            size="small"
          />
          <ToolBox 
            title="Cold Email Domains" 
            items={["Mailshake", "Lemlist"]} 
            color="bg-purple-300" 
            size="small"
          />
          <ToolBox 
            title="LI Social Connector" 
            color="bg-purple-400" 
            size="small"
          />
          <ToolBox 
            title="LinkedIn" 
            color="bg-blue-500" 
            size="small"
          />
          <ToolBox 
            title="Signals" 
            items={["Apollo", "Cognism", "Reachdesk", "6Sense", "ZoomInfo"]} 
            color="bg-purple-400" 
            size="small"
          />
          <ToolBox 
            title="Intent/GDPR compliant emails" 
            color="bg-purple-300" 
            size="small"
          />
        </div>

        {/* Third row */}
        <div className="flex justify-center gap-3 mb-4">
          <ToolBox 
            title="Scheduling" 
            items={["Apollo", "Calendly", "Chili Piper"]} 
            color="bg-purple-400" 
          />
          <div className="flex flex-col gap-3 justify-center">
            <ToolBox 
              title="Phone" 
              items={["Dialpad"]} 
              color="bg-purple-300" 
              size="small"
            />
            <ToolBox 
              title="Discovery" 
              items={["Chorus", "ExecVision"]} 
              color="bg-purple-300" 
              size="small"
            />
          </div>
          <ToolBox 
            title="Conversational Intelligence" 
            items={["Apollo", "Gong", "Clari", "Aviso", "Chorus", "SalesLoft", "Outreach"]} 
            color="bg-purple-500"
            size="large"
          />
          <ToolBox 
            title="Sales Engagement" 
            items={["Apollo", "SalesLoft", "Outreach", "Amplified/6Sense", "Drift", "MultiPoint", "Outreach"]} 
            color="bg-purple-500"
            size="large"
          />
          <ToolBox 
            title="Data" 
            items={["Apollo", "ZoomInfo", "DiscoverOrg"]} 
            color="bg-blue-500"
          />
          <ToolBox 
            title="Intent Data" 
            items={["6Sense", "DemandBase", "Apollo", "ZoomInfo"]} 
            color="bg-purple-300"
          />
        </div>

        {/* Fourth row */}
        <div className="flex justify-center gap-3 mb-4">
          <ToolBox 
            title="Lead Routing" 
            items={["RingLead/Dreamdata", "LeanData", "InsideView"]} 
            color="bg-purple-400"
          />
          <ToolBox 
            title="Chat" 
            items={["HubSpot", "Salesforce", "Drift", "Qualified", "Intercom", "Qualified"]} 
            color="bg-blue-800"
            size="large"
          />
          <ToolBox 
            title="Scoring" 
            items={["MadKudu", "6Sense", "Intercom/Marketo"]} 
            color="bg-purple-300"
          />
        </div>
        
        {/* Bottom row */}
        <div className="flex justify-center gap-3">
          <ToolBox 
            title="MAP" 
            items={["HubSpot", "Intercom/MA", "Marketo/Adobe", "Pardot/Salesforce"]} 
            color="bg-black"
            className="border border-white"
          />
          <ToolBox 
            title="Reverse ETL" 
            items={["Census", "Hightouch"]} 
            color="bg-black"
            className="border border-white"
          />
          <ToolBox 
            title="Data warehouse" 
            items={["Big Query/Redshift", "Redshift", "Snowflake", "Segment/Twilio", "Snowflake"]} 
            color="bg-black"
            className="border border-white"
            size="large"
          />
          <ToolBox 
            title="BI" 
            items={["Tableau/Salesforce", "Looker/Google", "domo"]} 
            color="bg-black"
            className="border border-white"
          />
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="flex gap-4 mt-12">
        <ActionButton label="Buy this" className="bg-blue-600 text-white hover:bg-blue-700" />
        <ActionButton label="Then this" className="bg-blue-600 text-white hover:bg-blue-700" />
        <ActionButton label="Then this" className="bg-blue-600 text-white hover:bg-blue-700" />
        <ActionButton label="Then this" className="bg-blue-600 text-white hover:bg-blue-700" />
        <ActionButton label="Contact Us" className="border border-white text-white hover:bg-white hover:bg-opacity-10" />
      </div>
    </div>
  );
};

export default Index;
