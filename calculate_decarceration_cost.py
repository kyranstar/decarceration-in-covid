import pandas as pd

if __name__ == "__main__":
    min_wage = pd.read_csv("minimum_wage.csv")
    min_wage['Annual'] = min_wage['minimum_wage']*40*52
    min_wage = min_wage.set_index("state")

    cost_prison = pd.read_csv("cost_prison_fips.csv", dtype=str)
    cost_prison['Cost'] = cost_prison['Cost'].astype(int)
    cost_prison = cost_prison.set_index("Name")

    #state,hotel_guest_spendings,num_hotels,num_avail_rooms,num_jobs
    hotel_data = pd.read_csv("imprisoned.tsv", sep='\t')
    hotel_data = hotel_data.set_index("State")
    print(hotel_data.columns)
    hotel_data = hotel_data[['Total Prison Population']].rename(columns={'Total Prison Population': 'PrisonPop'})

    hotel_min_wage = hotel_data.join(min_wage, how='left')
    joined = hotel_min_wage.join(cost_prison, how='left')
    joined = joined[['PrisonPop', 'minimum_wage', 'Annual', 'FIPS', 'Cost']]
    joined['PrisonPop'] = joined['PrisonPop'].str.replace(',', '')
    joined['PrisonPop'] = joined['PrisonPop'].astype(int)

    decarcerated_percentage = .1
    people_per_hotel_room = 2
    hotel_wage_inflation = 1.5
    hotel_room_cost_per_year = 75*365
    employee_cost_per_10_rooms = joined['Annual']*hotel_wage_inflation
    joined['TotalCost'] = joined['PrisonPop']*decarcerated_percentage*joined['Annual'] + joined['PrisonPop']*decarcerated_percentage/people_per_hotel_room*(hotel_room_cost_per_year + employee_cost_per_10_rooms/10) - joined['PrisonPop']*decarcerated_percentage*joined['Cost']
    joined = joined[['FIPS', 'TotalCost']]
    print(joined)
    joined.to_csv('TotalPlanCost.csv')
