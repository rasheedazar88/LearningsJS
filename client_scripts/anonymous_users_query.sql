


# Query contain anonymous users

SELECT user_id, count(user_id) FROM `events` WHERE action = "pageview" GROUP BY user_id





# Query converting anonymous users to known user by replacing ids from `anonymous_users`

WITH 
anonymous_user_list AS (
    SELECT user_id, anonymous_user_id FROM (
        SELECT user_id, anonymous_user_id, ROW_NUMBER() OVER( PARTITION BY anonymous_user_id ORDER BY inserted_at DESC ) AS top 
            FROM anonymous_users
    ) WHERE top = 1
)

SELECT user_id, count(user_id) FROM ( 
      SELECT IFNULL(aul.user_id, t0.user_id) AS user_id FROM `events` t0
        LEFT JOIN anonymous_user_list AS aul ON aul.anonymous_user_id = t0.user_id
        WHERE action = "pageview" 
) GROUP BY user_id