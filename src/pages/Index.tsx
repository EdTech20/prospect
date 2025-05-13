
import React from 'react';
import ToolBox from '@/components/ToolBox';
import ActionButton from '@/components/ActionButton';
import img from '../images/photo_2025-05-13_13-33-24.jpg'

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-10">
      <div className="text-center mb-4">
        <h1 className="text-1xl font-bold text-fuchsia-500 mb-3">Prospecting stack</h1>
        <div className="flex items-center justify-center gap-1 mb-8">
          <center>
          <span className="text-white" style={{fontSize:'20px'}}>hand-selected by: <img src={img} width='150px' /></span>
          </center>
        </div>
      </div>

      {/* Best tools for section */}
      <div className="flex gap-2 mb-10">
        <span className="text-white text-sm">Best tools for:</span>
        <div className="flex gap-2">
          <span className="bg-black border border-white text-white px-3 py-0.5 rounded-full text-xs">Any</span>
          <span className="bg-fuchsia-500 text-white px-3 py-0.5 rounded-full text-xs">STARTUP</span>
          <span className="bg-black border border-white text-white px-3 py-0.5 rounded-full text-xs">SCALEUP</span>
          <span className="bg-black border border-white text-white px-3 py-0.5 rounded-full text-xs">ENTERPRISE</span>
        </div>
      </div>

      {/* Main mind map layout */}
      <div className="relative w-full max-w-8xl mx-auto px-4">
        {/* Top row */}
        <div className="flex justify-center gap-4 mb-5">
          <ToolBox 
            title="LI Automation" 
            items={["Dripify", "Expandi", "HeyReach", "LinkedIn"]} 
            color="bg-purple-400" 
            size="small"
          />
          <ToolBox 
            title="Job Changers" 
            items={["Champify", "UserGems", "Champify"]} 
            color="bg-purple-400" 
            size="small"
          />
        </div>

        {/* Second row */}
        <div className="flex justify-center gap-4 mb-4">
          <ToolBox 
            title="Video" 
            items={["Loom", "Sendspark", "Vidyard", "Loom"]} 
            color="bg-purple-300" 
            size="small"
          />
          <ToolBox 
            title="Email Warming" 
            items={["Instantly", "Smartlead"]} 
            color="bg-purple-300" 
            size="small"
          />
          <ToolBox 
            title="AI Emails" 
            items={["Regie.ai", "Lavendar.ai"]} 
            color="bg-purple-400" 
            size="small"
          />
          <ToolBox 
            title="Warm Intros" 
            items={["Cabal", "Connect the Dots", "The Swarm", "Cabal"]} 
            color="bg-blue-500" 
            size="small"
          />
          <ToolBox 
            title="Signals" 
            items={["Apollo", "Common Room", "Koala", "Unify"]} 
            color="bg-purple-400" 
            size="small"
          />
          <ToolBox 
            title="Deanonymize website visitors" 
            items={["Apollo", "RB2B", "6Sense", "Vector", "Warmly", "Zoominfo", "Clearbit Reveal", "Factors.ai", "Koala", "Qualified", "Apollo"]} 
            color="bg-purple-300" 
            size="small"
          />
        </div>

        {/* Third row */}
        <div className="flex justify-center gap-4 mb-4">
          <ToolBox 
            title="Scheduling" 
            items={["Apollo", "Chilipiper", "SalesLoft", "Cal", "Calendly", "Outreach"]} 
            color="bg-purple-400" 
          />
          <div className="flex flex-col gap-3 justify-center">
            <ToolBox 
              title="Dialers" 
              items={["Frontspin", "Nooks", "Orum"]} 
              color="bg-purple-300" 
              size="small"
            />
          </div>
          <ToolBox 
            title="Conversational Intelligence" 
            items={["Apollo", "Granola", "Outreach", "SalesLoft", "Scratchpad", "Zoominfo", "Attention", "Clari", "Fathom", "Gong"]} 
            color="bg-purple-500"
            size="large"
          />
          <ToolBox 
            title="Sales Engagement" 
            items={["Apollo", "Salesforce", "SalesLoft", "Unify", "Zoominfo", "Amplemarket", "Clari", "Gong", "HubSpot", "Outreach", "Instantly (high volume)", "Smartlead (high volume)"]} 
            color="bg-purple-500"
            size="large"
          />
          <ToolBox 
            title="Data" 
            items={["Apollo", "LeadIQ", "LinkedIn", "Zoominfo", "Clay", "Cognism"]} 
            color="bg-blue-500"
          />
          <ToolBox 
            title="Intent Data" 
            items={["6Sense", "Demandbase", "Zoominfo", "Apollo", "Bombora"]} 
            color="bg-purple-300"
          />
        </div>

        {/* Fourth row */}
        <div className="flex justify-center gap-4 mb-4">
          <ToolBox 
            title="Lead Routing" 
            items={["Ringlead(zoominfo)", "Leaddata", "Default*"]} 
            color="bg-purple-400"
          />
          <ToolBox 
            title="CRM" 
            items={["Salesforce", "Attio*", "Clarify*", "Day*", "Attio*", "HubSpot"]} 
            color="bg-blue-800"
            size="large"
          />
          <ToolBox 
            title="Chat" 
            items={["Conversica", "Drift", "Intercom", "Qualified"]} 
            color="bg-purple-400"
          />
          <ToolBox 
            title="Scoring" 
            items={["MadKudu", "Pocus", "Zoominfo", "Demandbase"]} 
            color="bg-purple-300"
          />
        </div>
        
        {/* Bottom row */}
        <div className="flex justify-center gap-4">
          <ToolBox 
            title="MAP" 
            items={["HubSpot", "Inflection.io*", "Marketo (Adobe)", "Pardot (Salesforce)"]} 
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
            items={["Big Query (Google)", "Redshift", "Rudderstack", "Segment (Twilio)", "Snowflake"]} 
            color="bg-black"
            className="border border-white"
            size="large"
          />
          <ToolBox 
            title="BI" 
            items={["Tableau (Salesforce)", "Looker (Google)", "Domo"]} 
            color="bg-black"
            className="border border-white"
          />
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="flex gap-5 mt-12">
        <ActionButton label="Buy first" className="bg-blue-600 text-white hover:bg-blue-700" />
        <ActionButton label="Then this" className="bg-blue-600 text-white hover:bg-blue-700" />
        <ActionButton label="Then this" className="bg-blue-600 text-white hover:bg-blue-700" />
        <ActionButton label="Then this" className="bg-blue-600 text-white hover:bg-blue-700" />
        <ActionButton label="Then this" className="bg-blue-600 text-white hover:bg-blue-700" />
      </div>
      
      {/* Additional category */}
      <div className="mt-6 text-sm text-gray-400">
        <span>Marketing or product owned</span>
      </div>
    </div>
  );
};

export default Index;
