const dofaData = [
    {
        "id": 1,
        "type": "Weaknesses",
        "items": [
            { "id": 1, "name": "High Competition", "description": "The smartphone market is highly competitive, with numerous established brands and new entrants constantly striving for market share. This intense competition often leads to price wars and requires continuous innovation to stay relevant." },
            { "id": 2, "name": "Production Costs", "description": "The cost of production is high due to the need for advanced technologies and high-quality materials. This results in increased expenses which can impact profit margins and make it challenging to offer competitive pricing." },
            { "id": 3, "name": "Supply Chain Dependency", "description": "Reliance on a global supply chain introduces risks related to disruptions, delays, and fluctuations in costs. Any issues in the supply chain can affect production schedules and product availability, potentially leading to customer dissatisfaction." }
        ]
    },
    {
        "id": 2,
        "type": "Opportunities",
        "items": [
            { "id": 1, "name": "Growing Demand", "description": "There is an increasing demand for smartphones with advanced features and cutting-edge technology. Consumers are looking for devices that offer new functionalities and enhanced performance, which presents opportunities for innovation and market growth." },
            { "id": 2, "name": "Emerging Markets", "description": "Emerging markets are experiencing rapid economic growth and technological adoption. Expanding into these regions can offer significant growth potential as more consumers seek affordable and advanced smartphones." },
            { "id": 3, "name": "Innovative Features", "description": "Developing and introducing new features that appeal to tech-savvy and innovative consumers can differentiate the brand from competitors. Staying ahead in technology trends can attract early adopters and boost market presence." }
        ]
    },
    {
        "id": 3,
        "type": "Strengths",
        "items": [
            { "id": 1, "name": "Brand Recognition", "description": "The brand enjoys strong recognition and customer loyalty, built over years of successful products and effective marketing. This reputation can drive consumer preference and contribute to higher sales and market share." },
            { "id": 2, "name": "Innovation", "description": "Continuous innovation in both design and technology is a key strength. The ability to regularly introduce new and improved products helps maintain consumer interest and can lead to industry leadership." },
            { "id": 3, "name": "Marketing Strategy", "description": "An effective marketing strategy, supported by a robust global presence, enhances brand visibility and drives sales. The company's strategic marketing efforts are designed to reach a wide audience and create strong brand associations." }
        ]
    },
    {
        "id": 4,
        "type": "Threats",
        "items": [
            { "id": 1, "name": "Economic Risks", "description": "Global economic instability and fluctuating consumer spending can pose threats to sales and profitability. Economic downturns or financial crises can reduce consumer purchasing power and affect overall market performance." },
            { "id": 2, "name": "Regulation Changes", "description": "Changes in regulations and technological standards can impact product development and compliance. Staying up-to-date with evolving regulations is crucial to avoid penalties and ensure market access." },
            { "id": 3, "name": "Increasing Competition", "description": "Emerging brands offering lower prices and alternative technologies are intensifying competition. These new entrants can capture market share by appealing to price-sensitive consumers or offering unique features." }
        ]
    }
];


const diagnostic = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 pl-6">1. Current diagnostic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {dofaData.map((category) => (
                    <div
                        key={category.id}
                        className="border-2 border-gray-800 rounded-lg p-6 shadow-md"
                    >
                        <h2 className="text-xl font-bold text-center mb-4">{category.type}</h2>
                        <ol>
                            {category.items.map((item) => (
                                <li key={item.id} className="text-base text-gray-700">
                                    <div className="flex items-start space-x-2">
                                        <span className="font-semibold">{item.id}.</span>
                                        <span className="font-semibold">{item.name}</span>
                                    </div>
                                    <div className="mt-1">{item.description}</div>
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default diagnostic;
